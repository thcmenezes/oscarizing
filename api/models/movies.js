'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movies.hasMany(models.Nominations, {
        foreignKey: 'movieId'
      })
    }
  }
  Movies.init({
    name: DataTypes.STRING,
    director: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    poster: DataTypes.STRING,
    info: DataTypes.TEXT,
    extra: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};