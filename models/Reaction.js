const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            // Should this be Date.now or formatedDate?
            default: Date.now(),
            get: formatedDate,
        },
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


module.exports = Reaction;