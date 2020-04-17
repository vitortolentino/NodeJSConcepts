const { repositories } = require('../datasource');

const LikeController = () => {

  function create(request, response) {
    const { id } = request.params;

    const findCallback = ({ id: repoId }) => repoId === id;
    const repositoryIndex = repositories.findIndex(findCallback);
    if (repositoryIndex < 0) {
      return response.status(400).send({ error: 'Repository not find' });
    }

    const findedRepository = repositories[repositoryIndex];
    const { likes } = findedRepository;

    const newRepository = {
      ...findedRepository,
      likes: likes + 1
    };

    repositories[repositoryIndex] = newRepository;

    return response.send();
  }

  return {
    create,
  };

};

module.exports = LikeController();