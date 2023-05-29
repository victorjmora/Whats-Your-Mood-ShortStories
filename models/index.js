const User = require('./User');
const Story = require('./Story');
// this is going to link the user table to the story table

User.hasMany(Story, {
    foreignKey: 'user_id', //ask mateo if this needs to change to just id
    onDelete: 'CASCADE'
  });
  
  Story.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Story };