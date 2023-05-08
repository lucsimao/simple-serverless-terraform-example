import { Order } from '../../enterprise-business-rules/entities/Order';
import { CreateOrderUseCase } from '../../enterprise-business-rules/use-cases/CreateOrder';
import { AbstractController } from '../protocols/AbstractController';
import { ValidationBuilder } from '../validation/Builder';
import { Validator } from '../validation/protocols/Validator';

type CreateOrderInput = Order;
type CreateOrderOutput = { message: string };

export class CreateOrderController extends AbstractController<
  CreateOrderInput,
  CreateOrderOutput
> {
  constructor(private readonly useCase: CreateOrderUseCase) {
    super();
  }

  public async handle(input: CreateOrderInput): Promise<CreateOrderOutput> {
    await this.useCase.create(input);

    return { message: `Success creating order` };
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
