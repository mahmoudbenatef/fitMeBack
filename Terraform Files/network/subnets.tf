resource "aws_subnet" "public-1" {
  vpc_id                  = aws_vpc.mainVPC.id
  cidr_block              = var.public-1_subnet_cidr
  map_public_ip_on_launch = true
  availability_zone       = var.AZ-1
  tags = {
    "Name" = "public-1"
  }
}

resource "aws_subnet" "public-2" {
  vpc_id                  = aws_vpc.mainVPC.id
  cidr_block              = var.public-2_subnet_cidr
  map_public_ip_on_launch = true
  availability_zone       = var.AZ-2
  tags = {
    "Name" = "public-2"
  }
}

resource "aws_subnet" "private-1" {
  vpc_id            = aws_vpc.mainVPC.id
  cidr_block        = var.private-1_subnet_cidr
  map_public_ip_on_launch = true
  availability_zone = var.AZ-1
  tags = {
    "Name" = "private-1"
  }
}

resource "aws_subnet" "private-2" {
  vpc_id            = aws_vpc.mainVPC.id
  cidr_block        = var.private-2_subnet_cidr
  map_public_ip_on_launch = true
  availability_zone = var.AZ-2
  tags = {
    "Name" = "private-2"
  }
}