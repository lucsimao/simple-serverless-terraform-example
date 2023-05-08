import { ApiHttpResponse } from '../../../interface-adapters/protocols/ApiHttpResponse';

export const adaptToServerlessResponse = (input: ApiHttpResponse<unknown>) => {
  const result = {
    statusCode: input.status,
    body: JSON.stringify(input.message),
  };

  return result;
};
