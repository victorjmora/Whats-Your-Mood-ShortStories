const sequelize = require('../config/connection');
const { User, Story, FavoriteStory } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');
const favoriteStoryData = require('./favoriteStoryData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    console.log(userData);
    //add sample user data to the User table/model in the database
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const stories = await Story.bulkCreate(storyData, {
        returning: true,
    });

    const favoriteStory = await FavoriteStory.bulkCreate(favoriteStoryData, {
        returning: true,
    });
    
    process.exit(0);
};


//call the function to seed the database with sample data
seedDatabase();
