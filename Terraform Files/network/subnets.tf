resource "aws_subnet" "public-1" {
  vpc_id                  = aws_vpc.mainVPC.id
  cidr_block              = var.public-1_subnet_cidr
  map_public_ip_on_launch = true
  availability_zone       = var.AZ-1
  tags = {
    "Name" = "public-1"
  }
}
