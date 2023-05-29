const sequelize = require('../config/connection');
const { User } = require('../models');
const { Story } = require('../models')

const userData = require('./userData.json');
const storyData = require('./storyData.json');

const seedDatabase = async () => {
    await sequelize.sync({force:true});

    //add sample user data to the User table/model in the database
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    //await Story.bulkCreate(storyData);

    process.exit(0);
};


//call the function to seed the database with sample data
seedDatabase();