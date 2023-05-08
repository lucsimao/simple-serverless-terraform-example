import { Order } from '../entities/Order';

export interface ProcessOrderUseCase {
  process(order: Omit<Order, 'status'>): Promise<void>;
}
