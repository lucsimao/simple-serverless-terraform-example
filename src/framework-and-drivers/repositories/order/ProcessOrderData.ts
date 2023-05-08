import { ProcessOrderRepository } from '../../../application-business-rules/protocols/ProcessOrderRepository';
import { Order } from '../../../enterprise-business-rules/entities/Order';

export interface DatabaseClient {
  create<T>(input: T): Promise<void>;
}

export class ProcessOrderData implements ProcessOrderRepository {
  constructor(private readonly databaseClient: DatabaseClient) {}

  public async process(order: Order): Promise<void> {
    await this.databaseClient.create({
      ...order,
      timestamp: new Date().getTime(),
    });
  }
}
