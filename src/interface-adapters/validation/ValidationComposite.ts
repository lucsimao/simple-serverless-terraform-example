import { Validator } from './protocols/Validator';

export class ValidationComposite implements Validator {
  constructor(private readonly validators: Validator[]) {}

  public validate(): Error[] {
    const result = this.validators.reduce((errors: Error[], validator) => {
      const error = validator.validate();
      return [...errors, ...error];
    }, []);

    return result;
  }
}
