const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const sendSms=require('./sendSms');
const {getContacts,getContactById}=require('./resources/contactInformation');
const {getMessages,saveMessages}=require('./resources/messageInformation');
const app = express();

const port=process.env.PORT||3030;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/',(req,res,next)=>{
    res.send(getContacts());
})
app.get('/contact/:id',(req,res,next)=>{
    const id=req.params.id;
    res.send(getContactById(id));
})
app.post('/contact/:id/compose',(req,res,next)=>{
    const otp=req.body.otp;
    const contactId=req.params.id;
    if(otp===undefined || contactId===undefined)
    {
        res.status(400).send({
            messgae: 'Bad Request'
        })
    }
    const message={
        otp,
        contactId
    }
    saveMessages(message);
    console.log(message);
    const to=getContactById(contactId).contactNo;
    const messageToSent=`Hi your OTP is : ${otp}`;
    console.log(sendSms(to,messageToSent));
    res.status(201).send({
        message: 'Message sent succefully Kindly check your phone'
    })

})

app.get('/messages',(req,res,next)=>{
    const messageList=getMessages();
    for(let index=0;index<messageList.length;index++)
    {
        const contact=getContactById(messageList[index].contactId);
        messageList[index].contactname=  [contact.firstname,contact.lastname].join(' ');
    }
    messageList.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    res.send(messageList);
})
http.createServer(app).listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
