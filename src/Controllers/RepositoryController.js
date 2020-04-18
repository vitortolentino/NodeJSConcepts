const RepositoryRepository = require('../Repositories/RepositoryRepository');
const { handleError } = require('./helpers');

const RepositoryController = () => {

  function index(request, response) {
    const repositories = RepositoryRepository.index();
    return response.json(repositories);
  }

  function create(request, response) {
    const repository = RepositoryRepository.create(request.body);
    return response.json(repository);
  }

  function update(request, response) {
    const { id } = request.params;
    const dataToUpdate = request.body;

    const newRepository = RepositoryRepository.update(id, dataToUpdate);
    if (newRepository.error) {
      return handleError(newRepository, response);
    }

    return response.json(newRepository)
  }

  function destroy(request, response) {
    const { id } = request.params;

    const deletedRepository = RepositoryRepository.destroy(id);
    if (deletedRepository.error) {
      return handleError(deletedRepository, response);
    }

    return response.status(204).send();
  }

  return {
    create,
    index,
    update,
    destroy,
  };

};

module.exports = RepositoryController();