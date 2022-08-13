const { Schema, model } = require('mongoose');
// const reaction?

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
            default: Date.now(),
            get: formatedDate,
        },
        username: 
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        // should this be [reactions]?
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction',
            }
        ]
    },
    {
        // do I need timestamps?
        timestamps: true,
        toJSON: {
            // virtuals?
            getters: true,
        },
        id: false,
    }
);

// getter for date
function formatedDate() {
    const timestamp = Date.now();
    return new Date(timestamp).toLocaleString();
};

const Thought = model('thought', thoughtSchema);

module.exports = Thought;