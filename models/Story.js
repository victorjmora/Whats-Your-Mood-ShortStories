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
    type: DataTypes.TEXT,
    allowNull: false,
  },
  genreTag1: {
    type: DataTypes.STRING,
    allowNull: true,
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
    allowNull: true,
  },
  dateUploaded: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  starRating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user_id: {  //the author's ID
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  }
},
{ sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'story',
}
);

module.exports = Story;
