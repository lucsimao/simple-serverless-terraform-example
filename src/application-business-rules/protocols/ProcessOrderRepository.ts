import { Order } from '../../enterprise-business-rules/entities/Order';

export interface ProcessOrderRepository {
  process(order: Order): Promise<void>;
}
