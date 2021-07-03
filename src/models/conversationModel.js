const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({

    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        },
    ],

},
    {
        writeConcern: {
            j: true,
            wtimeout: 1000,
        },
    });
const ConversationModel = mongoose.model("Conversation", conversationSchema);
module.exports = ConversationModel;
