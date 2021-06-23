resource "aws_internet_gateway" "mainIGW" {
  vpc_id = aws_vpc.mainVPC.id

  tags = {
    "Name" = "mainIGW"
  }
}