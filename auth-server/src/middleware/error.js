'use strict';

module.exports = (err, req, res, next) => {
  console.error('__SERVER_ERROR__', err);
  let error = {error: err.message || err};
  res.status(500).json(error);
};
