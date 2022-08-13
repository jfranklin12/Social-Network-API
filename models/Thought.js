const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
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

module.exports = Thought;