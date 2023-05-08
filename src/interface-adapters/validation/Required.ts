import { RequiredFieldError } from './errors/RequiredFieldError';
import { Validator } from './protocols/Validator';
import { ValidatorField } from './protocols/ValidatorField';

export class Required<T> implements Validator {
  constructor(private readonly field: ValidatorField<T>) {}

  public validate(): Error[] {
    if (this.field.value === null || this.field.value === undefined) {
      return [new RequiredFieldError(this.field.fieldName)];
    }

    return [];
  }
}
