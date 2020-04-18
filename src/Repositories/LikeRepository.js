const { repositories } = require('../datasource/index.js');
const { findById, respondWithError } = require('./helpers');

const LikeRespository = () => {

  function create(id) {
    const repositoryIndex = repositories.findIndex(findById(id));
    if (repositoryIndex < 0) {
      return respondWithError(400, 'Repository not find');
    }

    const findedRepository = repositories[repositoryIndex];
    const { likes } = findedRepository;

    const newRepository = {
      ...findedRepository,
      likes: likes + 1
    };

    repositories[repositoryIndex] = newRepository;

    return newRepository;
  }

  return { create };

};

module.exports = LikeRespository();