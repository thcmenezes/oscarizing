'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nominations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nominations.belongsTo(models.Movies, {
        foreignKey: 'movieId',
        as: 'Movie'
      })
      Nominations.belongsTo(models.Categories, {
        foreignKey: 'categoryId',
        as: 'Category'
      })
    }
  }
  Nominations.init({
    info: DataTypes.TEXT,
    movieId: DataTypes.UUID,
    categoryId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Nominations',
  });
  return Nominations;
};