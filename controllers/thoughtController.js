const { Thought, User } = require('../models');

module.exports = {
    // find all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // find a single thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought._id } },
                );
            })
            .then((user) =>
                !user 
                ? res.status(404).json({
                    message: ' Thought created, but found no user with that ID!'
                })
                    : res.json('Created your thought! 😎')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There is no thought with this id!' })
                    : res.json("Your thought has been updated 💭")
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // delete thought
    deleteThought(req, res) {
        Thought.deleteOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There is no thought with this id!' })
                    : res.json('Your thought was deleted! 👋')
            )
            .catch((err) => res.status(500).json(err));
    },
    // add a reaction to a thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There is no thought with this id!' })
                    : res.json('Your reaction was added 💙')
            )
            .catch((err) => res.status(500).json(err));
    },
    // delete reactions
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'There is no thought with this id!' })
                    : res.json("Your reaction was deleted 💔")
            )
            .catch((err) => res.status(500).json(err));
    },
};