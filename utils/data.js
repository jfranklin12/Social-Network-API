// username data
const username = [
    'jfranklin',
    'nharich',
    'mmtaylor',
    'vyang',
    'hsteffner',
    'hpadgett',
    'tforde',
    'dubsumm',
    'ewitt',
    'jung',
    'donnie',
    'travis',
    'mary',
    'vdunlap',
    'dsinitiere'
]
// email data
const email = [
    'salamander@aol.com',
    'moose@aol.com',
    'yak@aol.com',
    'dungbeetle@aol.com',
    'bluecrab@aol.com',
    'coati@aol.com',
    'turtle@aol.com',
    'alpaca@aol.com',
    'walrus@aol.com',
    'buffalo@aol.com',
    'crocodile@aol.com',
    'crow@aol.com',
    'mongoose@aol.com',
    'giraffe@aol.com',
    'wombat@aol.com'
]
// thoughts data
const thoughts = [
    'This is a thought',
    'This is another thought',
    'This is a random thought',
    'This is a funny thought',
    'This is a scary thought',
    'This is a happy thought',
    'This is a rambling thought',
    'This is a crazy thought',
    'This is a silly thought',
    'This is a super thought',
    'This thought is long',
    'This thought is short',
    'This thought has no purpose',
    'This thought is meaningful',
]
// reaction data
const reactions = [
    'happy',
    'sad',
    'funny',
    'crazy',
    'mindful',
    'fun',
    'angry',
    'boring',
    'interesting',
]

// gets a random item from a given array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// gets a random username
const getRandomUsername = () => getRandomArrItem(username);
// gets a random email
// const getRandomEmail = () => getRandomArrItem(email);

// create random user
const createRandomUser = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            username: username[i], //getRandomUsername(),
            email: email[i], //getRandomEmail(),
            thoughts: [],
            friends: []
        });
    }
    return results;
};
// creates random thoughts... I have no idea if this is right
const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomUsername(),
            reactions: [],
        });
    }
    return results;
};
// create reactions to be added to thoughts... also not sure about
// const getThoughtReactions = (int) => {
//     if (int === 1) {
//         return getRandomArrItem(reactions);
//     }
//     const results = [];
//     for (let i = 0; i < int; i++) {
//         results.push({
//             reactionBody: getRandomArrItem(reactions),
//             username: getRandomUsername,
//         });
//     }
//     return results;
// };

module.exports = { createRandomUser, getRandomThought }

