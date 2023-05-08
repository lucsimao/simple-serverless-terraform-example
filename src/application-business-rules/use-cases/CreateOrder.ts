import { Order } from '../../enterprise-business-rules/entities/Order';
import { CreateOrderUseCase } from '../../enterprise-business-rules/use-cases/CreateOrder';
import { PublishOrderRepository } from '../protocols/PublishOrderRepository';

export class CreateOrder implements CreateOrderUseCase {
  constructor(
    private readonly publishOrderRepository: PublishOrderRepository
  ) {}

  public async create(order: Order): Promise<void> {
    await this.publishOrderRepository.publish(order);
  }
}
