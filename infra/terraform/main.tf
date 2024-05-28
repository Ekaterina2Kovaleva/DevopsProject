terraform {
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }
  }
}
 
provider "yandex" {
  token  =  "y0_AgAAAAA_o5jkAATuwQAAAAEEx9JZAAB6OrExVZBKh5do3DZDsqMIGhPXfw"
  cloud_id  = "b1gn5dqg9b1gl8qjlmug"
  folder_id = "b1grbnvt6pt9nqtrir0o"
  zone      = "ru-central1-a"
}
 
variable "image-id" {
  type = string
}
 
resource "yandex_compute_instance" "vm-1" {
  name = "design-site-vm"
  platform_id = "standard-v1"
  zone = "ru-central1-a"
 
  resources {
    cores  = 2
    memory = 2
  }
 
  boot_disk {
    initialize_params {
      image_id = var.image-id
    }
  }
 
  network_interface {
    subnet_id = yandex_vpc_subnet.subnet-1.id
    nat       = true
  }
 
  metadata = {
    ssh-keys = "ubuntu:${file("~/.ssh/id_rsa.pub")}"
  }
}
 
resource "yandex_vpc_network" "network-1" {
  name = "design-site-network"
}
 
resource "yandex_vpc_subnet" "subnet-1" {
  name           = "design-site-subnet"
  zone           = "ru-central1-a"
  network_id     = yandex_vpc_network.network-1.id
  v4_cidr_blocks = ["10.2.0.0/16"]
}

variable "db-name" {
  type = string
}

variable "db-user" {
  type = string
}

variable "db-password" {
  type = string
}

resource "yandex_mdb_postgresql_cluster" "db-1" {
  name        = "design-site-db"
  environment = "PRESTABLE"
  network_id  = yandex_vpc_network.network-1.id
 
  config {
    version = 12
    resources {
      resource_preset_id = "s2.micro"
      disk_type_id       = "network-ssd"
      disk_size          = 16
    }
    postgresql_config = {
      max_connections                   = 395
      enable_parallel_hash              = true
      vacuum_cleanup_index_scale_factor = 0.2
      autovacuum_vacuum_scale_factor    = 0.34
      default_transaction_isolation     = "TRANSACTION_ISOLATION_READ_COMMITTED"
      shared_preload_libraries          = "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN,SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN"
    }
  }
 
  database {
    name  = var.db-name
    owner = var.db-user
  }
 
  user {
    name       = var.db-user
    password   = var.db-password
    conn_limit = 50
    permission {
      database_name = var.db-name
    }
    settings = {
      default_transaction_isolation = "read committed"
      log_min_duration_statement    = 5000
    }
  }
 
  host {
    zone      = "ru-central1-a"
    subnet_id = yandex_vpc_subnet.subnet-1.id
  }
}
 
output "internal_ip_address_vm_1" {
  value = yandex_compute_instance.vm-1.network_interface.0.ip_address
}
 
output "external_ip_address_vm_1" {
  value = yandex_compute_instance.vm-1.network_interface.0.nat_ip_address
}
