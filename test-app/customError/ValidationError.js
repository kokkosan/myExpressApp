const STATUSCODE = 400;
const CUSTOMCODE = 'E_1001';
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = STATUSCODE;
    this.customCode = CUSTOMCODE;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}
module.exports = ValidationError;
