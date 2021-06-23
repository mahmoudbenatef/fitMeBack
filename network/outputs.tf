output "public-1_id" {
  value = aws_subnet.public-1.id
}

output "public-2_id" {
  value = aws_subnet.public-2.id
}

output "private-1_id" {
  value = aws_subnet.private-1.id
}

output "private-2_id" {
  value = aws_subnet.private-2.id
}

output "vpc_id" {
    value = aws_vpc.mainVPC.id
}

output "vpc_cider_block" {
  value = aws_vpc.mainVPC.cidr_block
}