import { DynamoDB, PutItemCommandInput } from '@aws-sdk/client-dynamodb';

import { DatabaseClient } from '../../repositories/order/ProcessOrderData';

export class DynamoDatabaseClient implements DatabaseClient {
  constructor(
    private readonly dynamoClient: DynamoDB,
    private readonly tableName: string
  ) {}

  public async create<T>(input: T): Promise<void> {
    const item: PutItemCommandInput = {
      TableName: this.tableName,
      Item: DynamoDB.Converter.marshall(input as { [key: string]: unknown }),
    };
    await this.dynamoClient.putItem(item);
  }
}
