import { Validator } from './protocols/Validator';
import { ValidatorField } from './protocols/ValidatorField';
import { Required } from './Required';

export class ValidationBuilder {
  private constructor(
    private readonly field: ValidatorField<unknown>,
    private readonly validators: Validator[] = []
  ) {}

  static of<T>(field: ValidatorField<T>): ValidationBuilder {
    return new ValidationBuilder(field);
  }

  public required(): ValidationBuilder {
    this.validators.push(new Required(this.field));

    return this;
  }

  build(): Validator[] {
    return this.validators;
  }
}
