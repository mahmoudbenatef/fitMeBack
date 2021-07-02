const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({

    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        },
    ],

});
const ConversationModel = mongoose.model("Conversation", conversationSchema);
module.exports = ConversationModel;
