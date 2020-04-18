const LikeRepository = require('../Repositories/LikeRepository');
const { handleError } = require('../Controllers/helpers');


const LikeController = () => {

  function create(request, response) {
    const { id } = request.params;

    const newRepository = LikeRepository.create(id);
    if (newRepository.error) {
      return handleError(newRepository, response);
    }

    return response.json(newRepository);
  }

  return {
    create,
  };

};

module.exports = LikeController();