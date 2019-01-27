class StatusError extends Error {
    constructor(code, msg, ...params) {
      super(...params);
      
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, StatusError);
      }
  
      // Custom debugging information
      this.code = code;
      this.msg = msg;
    }
  }
  
  module.exports = StatusError;