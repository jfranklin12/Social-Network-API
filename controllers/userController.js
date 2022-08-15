const { User, Thought } = require('../models');

module.exports = {
    // Find all Users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Find One User
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // update user by its id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json("This user was updated! 🥳")
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // delete user by it's id and associated thoughts
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id' })
                    : Thought.deleteMany({ _id: { $in: user.thought } })
            )
            .then(() => res.json({ message: 'User and associated thoughts deleted! 👋' }))
            .catch((err) => res.status(500).json(err));
    },
    // add friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no user with this id!' })
                    : res.json("Your friend was added! 😸")
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    // delete friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'There is no user with this id!' })
                    : res.json("Your friend was deleted! 😿")
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    }

};