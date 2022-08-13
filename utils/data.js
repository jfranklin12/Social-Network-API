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
]
// email data
const email = [
    'jfranklin@aol.com',
    'nharich@aol.com',
    'mmtaylor@aol.com',
    'vyang@aol.com',
    'hsteffner@aol.com',
    'hpadgett@aol.com',
    'tforde@aol.com',
    'dubsumm@aol.com',
    'ewitt@aol.com',
    'jung@aol.com',
    'donnie@aol.com',
    'travis@aol.com',
    'mary@aol.com',
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
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.lenth)];

// gets a random username
const getRandomUsername = () => `${getRandomArrItem(username)}`;

const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        
    }
}

module.exports = { getRandomUsername, getRandomThought }

