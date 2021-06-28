module "networkMod" {
  source                = "./network"
  cidr                  = var.cidr
  name                  = var.name
  public-1_subnet_cidr  = var.public-1_subnet_cidr
  AZ-1                  = var.AZ-1
  AZ-2                  = var.AZ-2
}
