const contactList=[
     {
        id:0,
        firstname:"Kisan",
        lastname:"Network",
        contactNo:"+919810153260",
        emailId:"kisannetwork@gmail.com"
    },
    {
        id:1,
        firstname:"Anju",
        lastname:"Maurya",
        contactNo:"+919453261454",
        emailId:"anjumaurya101@gmail.com"
    },
    {
        id:1,
        firstname:"Anju",
        lastname:"Maurya",
        contactNo:"+919453261454",
        emailId:"anjumaurya101@gmail.com"
    },
    {
        id:1,
        firstname:"Anju",
        lastname:"Maurya",
        contactNo:"+919453261454",
        emailId:"anjumaurya101@gmail.com"
    },
    {
        id:1,
        firstname:"Anju",
        lastname:"Maurya",
        contactNo:"+919453261454",
        emailId:"anjumaurya101@gmail.com"
    },
    {
        id:1,
        firstname:"Anju",
        lastname:"Maurya",
        contactNo:"+919453261454",
        emailId:"anjumaurya101@gmail.com"
    }
]

function getContacts(){
    return contactList;
}

function getContactById(id){
    for(let index=0;index<contactList.length;index++)
    {
        if(contactList[index].id==id)
        {
            return contactList[index];
        }
    }
}
module.exports= {getContacts,getContactById};
