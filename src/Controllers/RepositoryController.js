const { uuid } = require("uuidv4");
const { repositories } = require('../datasource/index.js');

const RepositoryController = () => {

  function index(request, response) {
    return response.json(repositories);
  }

  function create(request, response) {
    const {
      url,
      techs,
      title,
    } = request.body;

    const repository = {
      url,
      techs,
      title,
      id: uuid(),
      likes: 0
    }

    repositories.push(repository);

    return response.json(repository);
  }

  function update(request, response) {
    const {
      url,
      techs,
      title,
    } = request.body;
    const { id } = request.params;

    const findCallback = ({ id: repoId }) => repoId === id;
    const repositoryIndex = repositories.findIndex(findCallback);
    if (repositoryIndex < 0) {
      return response.status(400).send({ error: 'Repository not find' });
    }

    const findedRepository = repositories[repositoryIndex];
    const newRepository = {
      ...findedRepository,
      url,
      techs,
      title
    };
    repositories[repositoryIndex] = newRepository;

    return response.json(newRepository)

  }

  function destroy(request, response) {
    const { id } = request.params;

    const findCallback = ({ id: repoId }) => repoId === id;
    const repositoryIndex = repositories.findIndex(findCallback);
    if (repositoryIndex < 0) {
      return response.status(400).send({ error: 'Repository not find' });
    }

    repositories.splice(repositoryIndex, 1);

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