const cors = require('cors')
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config;
const mongoose = require('mongoose');
let UserModel = require('./user.model.js');

nextApp.prepare().then(() => {
    // express code here
    mongoose.connect('mongodb://127.0.0.1:27017/users-next',{useNewUrlParser:true});
    var db = mongoose.connection;
    db.on('error',console.error.bind(console,"mongodb connect error"));
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    const newRouter = express.Router();
    app.use('/api',newRouter);
    

    //GET ALL USERS
    newRouter.get('/users',async(req,res)=>{
        UserModel.find().exec(function(err,users){
            //console.log(users);
            return res.json(users);
        });
        //return res.json(query);
    })
    //POST CREATE NEW USER
    newRouter.post('/users/add',function(req,res){
        let user = new UserModel(req.body);
        user.save()
            .then(user => {
                res.status(200).json({'user':'user added sucessfully'});
            })
            .catch(err => {
                res.status(400).send('adding new user failed');
            });
    });
    //PUT EDIT USER
    newRouter.put('/users/:id',function(req,res){
        UserModel.findOneAndUpdate({id: req.params.id}, {$set: req.body}, function (err, user) {
            if (err) return res.json({'success': false});
            return res.json({'success': true});
        });
    })


    //DELETE USER
    newRouter.delete('/users/:id', function(req,res){
        UserModel.findOneAndRemove({id : req.params.id}, function (err) {
            if (err) return res.json({'success': false});
            return res.json({'success': true});
        });


    });




    app.listen(PORT, err => {
        if (err) throw err;
        console.log(` ready at https://localhost:${PORT}`)
    })    
})