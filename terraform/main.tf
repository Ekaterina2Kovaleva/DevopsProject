terraform {
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }
  }
  required_version = ">= 0.13"
}

variable "token" {
  type = string
}

variable "accessKeyId" {
  type = string
}

variable "secretAccessKey" {
  type = string
}

variable "cloud-id" {
  type = string
}

variable "folder-id" {
  type = string
}

provider "yandex" {
  token  =  var.token
  cloud_id  = var.cloud-id
  folder_id = var.folder-id
  zone      = "ru-central1-a"
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

resource "yandex_storage_bucket" "sb-1" {
  access_key = var.accessKeyId
  secret_key = var.secretAccessKey
  bucket     = "design-site.ru"
  acl        = "public-read"

  website {
    index_document = "index.html"
  }
  provisioner "local-exec" {
    command = "yarn deploy"
    working_dir = "../frontend"
  }
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

variable "image-id" {
  type = string
}

variable "db-engine" {
  type = string
}

variable "db-port" {
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

  depends_on = [yandex_mdb_postgresql_cluster.db-1]
  provisioner "local-exec" {
    command = "yarn deploy"
    working_dir = "../frontend"
  }
}
