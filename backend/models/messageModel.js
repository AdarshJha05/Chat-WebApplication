import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USER",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USER",
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
export const Message = mongoose.model("Message", messageModel);