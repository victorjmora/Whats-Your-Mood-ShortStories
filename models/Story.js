const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Story extends Model {}

Story.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT('medium'), //max length 16,777,215
    allowNull: false,
  },
  genreTag1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genreTag2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genreTag3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateUploaded: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  starRating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
},
{ sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'user',
}
);

module.exports = Story;
