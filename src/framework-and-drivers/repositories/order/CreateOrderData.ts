import { PublishOrderRepository } from '../../../application-business-rules/protocols/PublishOrderRepository';
import { Order } from '../../../enterprise-business-rules/entities/Order';

export interface NotificationClient {
  publish<T>(message: T): Promise<void>;
}

export class CreateOrderData implements PublishOrderRepository {
  constructor(private readonly notificationClient: NotificationClient) {}

  public async publish(order: Order): Promise<void> {
    await this.notificationClient.publish(order);
  }
}
