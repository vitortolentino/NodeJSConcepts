
exports.handleError = ({ error, code }, response) => {
  return response.status(code).json({ error })
};