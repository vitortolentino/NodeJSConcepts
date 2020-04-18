exports.findById = (id) => {
  return ({ id: repoId }) => repoId === id;
};

exports.respondWithError = (code, message) => {
  return {
    code,
    error: message
  };
};