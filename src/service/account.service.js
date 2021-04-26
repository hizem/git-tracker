const models = require('../models');
exports.getUser = async (userId) => {
  const user = await models.User.findOne({
    where: { id: userId },
    include: {
      model: models.Repo,
      as: 'repos',
    },
  });
};
