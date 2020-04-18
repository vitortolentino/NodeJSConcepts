const { uuid } = require("uuidv4");

const { repositories } = require('../datasource/index.js');
const { findById, respondWithError } = require('./helpers');

const RepositoryRepository = () => {

  function index() {
    return repositories;
  }

  function create(data) {
    const {
      url,
      techs,
      title,
    } = data;

    const repository = {
      url,
      techs,
      title,
      id: uuid(),
      likes: 0
    }

    repositories.push(repository);
    return repository;
  }

  function update(id, dataToUpdate) {

    const {
      url,
      techs,
      title,
    } = dataToUpdate;

    const repositoryIndex = repositories.findIndex(findById(id));
    if (repositoryIndex < 0) {
      return respondWithError(400, 'Repository not find');
    }

    const findedRepository = repositories[repositoryIndex];
    const newRepository = {
      ...findedRepository,
      url,
      techs,
      title
    };
    repositories[repositoryIndex] = newRepository;

    return newRepository;
  }

  function destroy(id) {
    const repositoryIndex = repositories.findIndex(findById(id));
    if (repositoryIndex < 0) {
      return respondWithError(400, 'Repository not find');
    }

    return repositories.splice(repositoryIndex, 1);
  }

  return {
    create,
    index,
    update,
    destroy
  };
};

module.exports = RepositoryRepository();