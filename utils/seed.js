const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { createRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected... seeding database 🌱');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = createRandomUser(5);
    const thoughts = getRandomThought(10);

    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete 🌱');
    process.exit(0);

})