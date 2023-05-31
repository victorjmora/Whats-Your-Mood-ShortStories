const User = require('./User');
const Story = require('./Story');
const FavoriteStory = require('./FavoriteStory');
// this is going to link the user table to the story table

User.hasMany(Story, {
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
  });
  
  Story.belongsTo(User, {
    foreignKey: 'user_id'
  });

  
  User.belongsToMany(Story, {
    // Define the third table needed to store the foreign keys
    through: {
      model: FavoriteStory,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'story_likes'
  });
  
  Story.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
      model: FavoriteStory,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'user_favorites'
  });

  module.exports = { User, Story };