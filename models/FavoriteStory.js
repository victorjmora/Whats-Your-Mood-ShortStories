const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FavoriteStory extends Model {}

FavoriteStory.init({

    
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id',
            unique: false
          }
        },
        story_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'story',
            key: 'id',
            unique: false
          }
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favoriteStory'
      }
    );

    module.exports = FavoriteStory;