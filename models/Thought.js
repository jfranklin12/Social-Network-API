const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatedDate,
        },
        username:
        {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },
);

// getter for date
function formatedDate() {
    const timestamp = Date.now();
    return new Date(timestamp).toLocaleString();
};

// virtual to county reaction
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;