export class ApiError extends Error {
  statusCode: number;
  isOperational: boolean;
  stack: string;

  constructor(statusCode: number, message: string, isOperational: boolean = true, stack: string = '') {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Boolean(stack)
      ? this.stack = stack
      : Error.captureStackTrace(this, this.constructor);
  }
}
