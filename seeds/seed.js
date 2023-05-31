const sequelize = require('../config/connection');
const { User, Story } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');

const seedDatabase = async () => {
    await sequelize.sync({force:true});

    console.log(userData);
    //add sample user data to the User table/model in the database
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
     users
     for (const story of storyData) {
     await Story.create({
             ...story,
             user_id: users[Math.floor(Math.random() * users.length)].id, //create user_id, referenced in storyroutes.js
         });
     }
    process.exit(0);
};


//call the function to seed the database with sample data
seedDatabase();