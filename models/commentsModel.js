const mongoose = require('mongoose');


const commentsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: "Comments"
})

const commentsModel = mongoose.model("CommentsModel", commentsSchema);

module.exports = commentsModel;
