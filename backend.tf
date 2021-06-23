terraform {
  backend "s3" {
    bucket         = "vpc-bucket-demoo"
    key            = "dev/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "mytable-terraform-demo"
  }
}