const sanitizeMongo = require('mongo-sanitize');

const sanitize = (req, res, next) => {
  const sanitizeObject = (requestedData) => {
    const obj = sanitizeMongo(requestedData)
    if (obj) {
      for (const key in obj) {
        if (typeof obj[key] === "string") {
          obj[key] = obj[key].trim();
          if (key === "email") {
            obj[key] = obj[key].toLowerCase();
          }
        }
      }
    }
  };

  sanitizeObject(req.body);
  sanitizeObject(req.query);
  sanitizeObject(req.params);

  next();
};

module.exports = sanitize;
