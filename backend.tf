terraform {
  backend "s3" {
    bucket         = "vpc-bucket-gp"
    key            = "dev/terraform.tfstate"
    region         = "us-east-2"
    dynamodb_table = "mytable-terraform-gp"
  }
}
