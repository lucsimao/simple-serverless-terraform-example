import {
  badRequest,
  internalServerError,
  ok,
} from '../util/HttpResponseParser';
import { Validator } from '../validation/protocols/Validator';
import { ValidationComposite } from '../validation/ValidationComposite';
import { ApiHttpRequest } from './ApiHttpRequest';
import { ApiHttpResponse } from './ApiHttpResponse';

export abstract class AbstractController<Input, Output> {
  protected abstract handle(input: Input): Promise<Output>;

  public async exec({
    params,
  }: ApiHttpRequest<Input>): Promise<ApiHttpResponse<Output | string>> {
    try {
      console.log('Received input', JSON.stringify(params));
      const errors = this.validate(params);
      if (errors.length) {
        return badRequest(errors);
      }
      const result = await this.handle(params);

      console.info('Success executing use case', JSON.stringify(result || ''));
      return ok(result);
    } catch (error) {
      console.error(error);
      return internalServerError([error as Error]);
    }
  }

  private validate(httpRequest: Input): Error[] {
    const validators = this.buildValidators(httpRequest);
    const result = new ValidationComposite(validators).validate();

    return result;
  }

  public abstract buildValidators(_input: Input): Validator[];
}
