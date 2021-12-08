const userRouter = require('express').Router()
const Users = require('../model/users');


userRouter.post('/register',(req,res,next)=>{
    let {body} = req;
    const user = new Users(body)
    user.save()
    .then((result)=>{
        console.log(result)
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
    console.log(req)
})



// get by ID
userRouter.get('/:id',(req,res)=>{
    Users.findById(req.params.id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
 });


 
//get all , filteration by name
// userRouter.get('/',(req,res,next)=>{
//     const filters = req.query;
//     Users.find({})
//         .then((result)=>{
//             if(filters.name){
//                 let lower =  filters.name.toLowerCase()
//                 let capitalize = filters.name.charAt(0).toUpperCase() + filters.name.slice(1)
//                 let filteredUsers = []
//                 result.filter(user => {
//                     for (key in filters) {
//                       if(user[key].includes(lower) || user[key].includes(capitalize)){
//                             filteredUsers.push(user);
//                         }
//                     }
//             });
//                 res.status(201).json(filteredUsers)
//             }else{
//                 res.status(201).json(result)
//             }
//         })
//         .catch((err)=>{
//             res.status(400).json(err)
//         })
//     });

module.exports = 
userRouter

