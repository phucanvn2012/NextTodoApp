const express = require('express');
const router = express.Router();
const Users = require('');

router.get('/users',(req,res)=>{
    Users.find({}, (err,users)=>{
        res.json(users)
    })
})

router.use('/users/:id',(req,res,next)=>{
    console.log(req.params.id)
    Users.findById(req.params.id, (err,users)=>{
        if(err)
            res.status(500).send(err)
        else
            req.user = user
            next()
    })
})

router
    .get('/users/:id',(req,res)=>{
        let result= res.json(req.user)
        console.log(result)
        return res.json(req.user)
    })
    // .put('/users/:id',(req,res)=>{
    //     Object.keys(req.body).map(key=>{
    //         req.user[key] = req.body[key]
    //     })
    //     req.user.save()
    //     res.json(req.user)
    // })

module.exports = router;
