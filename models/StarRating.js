const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const FavoriteStory = require("./FavoriteStory");

class StarRating extends FavoriteStory {}

FavoriteStory.init({

    
      
        starRating: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
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