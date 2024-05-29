cd frontend

yarn install
yarn build

npm install dotenv

cd ../terraform

terraform apply -var-file=vars.tfvars