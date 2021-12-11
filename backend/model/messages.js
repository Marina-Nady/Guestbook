const mongoose = require('mongoose')
const Messages = mongoose.model('Messages',{
    content:{
        type:String,
    },    
    owner:{
        type:mongoose.Schema.Types.ObjectId
    }
  
})

module.exports = Messages