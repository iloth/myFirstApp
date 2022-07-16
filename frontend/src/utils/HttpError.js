const httpCodes = new Map([
  [200, 'ok'],
  [400, 'Bad Request'],
  [401, 'Unauthorized'],
  [402, 'Payment required'],
  [403, 'Forbidden'],
  [404, 'Not Found'],
  [500, 'Server error'],
]);

class HttpError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    if (!message && httpCodes.has(code)) {
      this.message = httpCodes.get(code);
    }
  }

  code;
}

export default HttpError;