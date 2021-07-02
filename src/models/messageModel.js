const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: true
    },
    sender:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    receiver:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }

});
const MessageModel = mongoose.model("Message", messageSchema);
module.exports = MessageModel;
