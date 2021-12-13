const messageRouter = require('express').Router()
const Messages = require('../model/messages');


messageRouter.post('/send',(req,res,next)=>{
    let {body} = req;
    const msg = new Messages(body)
    msg.save()
    .then((result)=>{
        console.log(result)
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
})

// delete by ID
messageRouter.delete('/:id',(req,res,next)=>{
    Messages.findByIdAndRemove(req.params.id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
 });

//edit 
 messageRouter.patch('/:id',(req,res,next)=>{
    let {body} = req
    Messages.findByIdAndUpdate(req.params.id,body)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
});

 
//get all msgs
messageRouter.get('/',(req,res)=>{
    Messages.find({}).populate('auth').populate('to')
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

// get by ID
// messageRouter.get('/:id',(req,res)=>{
//     Messages.findById(req.params.id)
//     .then((result)=>{
//         res.status(200).json(result)
//     })
//     .catch((err)=>{
//         res.status(500).json(err)
//     })
//  });




module.exports = 
messageRouter

