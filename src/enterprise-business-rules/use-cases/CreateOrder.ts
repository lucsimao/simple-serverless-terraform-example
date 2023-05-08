import { Order } from '../entities/Order';

export interface CreateOrderUseCase {
  create(order: Omit<Order, 'status'>): Promise<void>;
}
