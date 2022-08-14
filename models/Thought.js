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
            // Should this be Date.now or formatedDate?
            default: Date.now,
            get: formatedDate,
        },

        // should this be username with type: STRING, required: true
        username: 
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        reactions: [reactionSchema],
    },
    {
        // do I need timestamps?
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