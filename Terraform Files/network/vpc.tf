resource "aws_vpc" "mainVPC" {
  cidr_block = var.cidr
  tags = {
    "Name" = "mainVPC"
    "test" = "test"
  }
}