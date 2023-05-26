const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //role: {
  //type: DataTypes.STRING,
  //allowNull: false,
  //},
  favoriteAuthor: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  favoriteStories: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  collections: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
});
