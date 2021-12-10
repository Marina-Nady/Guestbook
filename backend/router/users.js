const userRouter = require('express').Router()
const Users = require('../model/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = "GuestBook"

//register
userRouter.post('/register',async (req,res)=>{
    const {body} = req;
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(body.password,salt);
        body.password = hashedPassword
        const user = new Users(body)
        const savedUser = await user.save()
        res.status(201).json(savedUser)
               
    }
    catch(err){
        res.status(400).json(err)
    }
})


//login
userRouter.post('/login', async (req,res)=>{
    const {body} = req;
    if(body.email && body.password){
        const user = await Users.findOne({email:body.email})
        if(user){
            const match = await bcrypt.compare(body.password,user.password)
            if(match){
                jwt.sign({id:user._id},secret,(err,token)=>{
                    res.status(200).json({token})
                })
            }else{
                res.status(400).json('invalid password')
            }
        }
    }
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

