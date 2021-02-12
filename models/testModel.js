const mongoose = require('mongoose');


const testSchema = mongoose.Schema({
    title: {
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
    },
    myDate: {
        type: Date,
        default: Date()
    }
}, {
    timestamps: true,
    collection: "TestColl"
})

const testModel = mongoose.model("MyModel", testSchema);

module.exports = testModel;
