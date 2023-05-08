import { Order } from '../../enterprise-business-rules/entities/Order';

export interface PublishOrderRepository {
  publish(order: Order): Promise<void>;
}
