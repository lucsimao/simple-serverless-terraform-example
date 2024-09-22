locals {
  serverless_path = "./serverless"
  process_order_lambda_name = "processOrder"
}

module "processOrder" {
  source = "terraform-aws-modules/lambda/aws"

  function_name = local.process_order_lambda_name
  description   = "My awesome lambda function"
  handler       = "src/framework-and-drivers/serverless-lambda/process-order/index.processOrder"
  runtime       = "node20.x"
  create_package         = false

  source_path = "${local.serverless_path}/${local.process_order_lambda_name}"

  tags = {
    Name = "my-lambda1"
  }
}

