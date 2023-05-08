import { Order, Status } from '../../enterprise-business-rules/entities/Order';
import { ProcessOrderUseCase } from '../../enterprise-business-rules/use-cases/ProcessOrder';
import { ProcessOrderRepository } from '../protocols/ProcessOrderRepository';

export class ProcessOrder implements ProcessOrderUseCase {
  constructor(
    private readonly processOrderRepository: ProcessOrderRepository
  ) {}

  public async process(input: Omit<Order, 'status'>): Promise<void> {
    const order = { ...input, status: Status.PENDING };

    await this.processOrderRepository.process(order);
  }
}
