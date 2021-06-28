output "public-1_id" {
  value = aws_subnet.public-1.id
}

output "vpc_id" {
    value = aws_vpc.mainVPC.id
}

output "vpc_cider_block" {
  value = aws_vpc.mainVPC.cidr_block
}
