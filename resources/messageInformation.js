const {v4 : uuidv4} = require('uuid')
const messageList=[
    {
        id:uuidv4(),
        otp:"123456",
        contactId:1,
        createdAt:new Date()
    },
    {
        id:uuidv4(),
        otp:"123456",
        contactId:1,
        createdAt:new Date()
    }
]

function getMessages(){
    return messageList;
}

function saveMessages(message){
    const newMessage={
        id:uuidv4(),
        otp:message.otp,
        createdAt:new Date(),
        contactId:message.contactId
    }
    messageList.push(newMessage);
}
module.exports={getMessages,saveMessages}