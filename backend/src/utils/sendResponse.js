const sendResponse = (res, message = 'Success', status = 200, success = true, additionalData = {}) => {
  res.status(status).send({
    success,
    message,
    ...additionalData,
  });
};

export default sendResponse;
