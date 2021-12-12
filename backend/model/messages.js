const mongoose = require('mongoose')
const Messages = mongoose.model('Messages',{
    content:{
        type:String,
    },    
    auth:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }

  
})

module.exports = Messages