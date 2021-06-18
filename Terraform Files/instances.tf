resource "aws_instance" "bastion" {
  ami                    = var.ami
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.newPrivateKey.key_name
  vpc_security_group_ids = [aws_security_group.first-security-group.id]
  subnet_id              = module.networkMod.public-1_id
  tags = {
    "Name" = "bastionInstance"
  }

  provisioner "local-exec" {
    command = "echo The server IP address is ${self.public_ip}"
  }
}

resource "aws_instance" "private" {
  ami                    = var.ami
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.newPrivateKey.key_name
  vpc_security_group_ids = [aws_security_group.second-security-group.id]
  subnet_id              = module.networkMod.private-1_id
  tags = {
    "Name" = "privateInstance"
  }
}