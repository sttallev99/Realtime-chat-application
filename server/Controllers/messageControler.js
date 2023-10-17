const MessageModel = require('../Models/MessageModel');

//create message
const createMessage = async(req, res) => {
    const { chatId , senderId, text } = req.body;

    const message = new MessageModel({ chatId, senderId, text });
    
    try{
        const response = await message.save();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}
//get messages

const getMessage = async(req, res) => {
    const { chatId } = req.params;

    try{
        const message = await MessageModel.find({ chatId });
        res.status(200).json(message);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {
    createMessage,
    getMessage
}