import { Order } from '../../enterprise-business-rules/entities/Order';
import { ProcessOrderUseCase } from '../../enterprise-business-rules/use-cases/ProcessOrder';
import { AbstractController } from '../protocols/AbstractController';
import { ValidationBuilder } from '../validation/Builder';
import { Validator } from '../validation/protocols/Validator';

export class ProcessOrderController extends AbstractController<
  Omit<Order, 'status'>,
  void
> {
  constructor(private readonly useCase: ProcessOrderUseCase) {
    super();
  }

  public async handle(order: Omit<Order, 'status'>): Promise<void> {
    const result = await this.useCase.process(order);

    return result;
  }

  public buildValidators(input: Order): Validator[] {
    const result = ValidationBuilder.of({
      value: JSON.stringify(input.items),
      fieldName: 'items',
    })
      .required()
      .build();

    return result;
  }
}
