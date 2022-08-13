const router = require('express').Router();
const {
    getThoughts,
    getSignleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

//  /api/thoughts
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSignleThought).put(updateThought).delete(deleteThought)

// /api/thoughts/:thoughtsId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtsId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;