terraform {
  backend "s3" {
    bucket         = "vpc-bucket-gp-iti"
    key            = "dev/terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "mytable-terraform-gp"
  }
}
