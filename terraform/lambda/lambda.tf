locals {
  serverless_path           = "."
  process_order_lambda_name = "processOrder"
  create_order_lambda_name  = "createOrder"
  lambda_prefix             = "simple-serverless-example"
}

module "createOrder" {
  source = "terraform-aws-modules/lambda/aws"

  function_name  = "${local.lambda_prefix}-${local.create_order_lambda_name}"
  description    = "My awesome lambda function"
  handler        = "src/framework-and-drivers/serverless-lambda/create-order/index.createOrder"
  runtime        = "nodejs20.x"
  create_package = false

  local_existing_package = "${local.serverless_path}/${local.lambda_prefix}-${local.create_order_lambda_name}.zip"

  environment_variables = {
    DYNAMODB_ORDER_TABLE_NAME = local.dynamo_order_table_name
  }

  tags = {
    Name = "my-lambda1"
  }
}

module "processOrder" {
  source = "terraform-aws-modules/lambda/aws"

  function_name  = "${local.lambda_prefix}-${local.process_order_lambda_name}"
  description    = "My awesome lambda function"
  handler        = "src/framework-and-drivers/serverless-lambda/process-order/index.processOrder"
  runtime        = "nodejs20.x"
  create_package = false

  local_existing_package = "${local.serverless_path}/${local.lambda_prefix}-${local.process_order_lambda_name}.zip"

  environment_variables = {
    DYNAMODB_ORDER_TABLE_NAME = local.dynamo_order_table_name
  }

  tags = {
    Name = "my-lambda1"
  }
}

