const mongoose = require('mongoose')
const Messages = mongoose.model('Messages',{
    content:{
        type:String,
    },
  
})

module.exports = Messages