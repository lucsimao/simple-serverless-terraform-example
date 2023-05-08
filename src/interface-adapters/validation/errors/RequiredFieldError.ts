export class RequiredFieldError extends Error {
  constructor(paramName: string) {
    super(`Required field: ${paramName}`);
    this.name = 'RequiredFieldError';
  }
}
