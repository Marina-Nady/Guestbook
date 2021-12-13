const mongoose = require('mongoose')
const Replies = mongoose.model('Replies',{
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
    },
    msgId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Messages'
    }

  
})

module.exports = Replies