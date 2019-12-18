/**
 * @class
 * @name CustomError
 * @description The Custom Error provider class.
 */
export default class CustomError extends Error {
  message: string;
  private date: Date;
  private errorMessage: any;
  constructor(message: string, data: any) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    // Custom debugging information
    this.message = message;
    this.errorMessage = data;
    this.date = new Date();
  }
}
