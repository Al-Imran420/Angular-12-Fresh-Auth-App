const jwt = require('jsonwebtoken');
const config = require('../../config/db.config')
const User = require('../models/user.models')
const bcrypt = require('bcryptjs');

module.exports.register = function(req, res, next){
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        userrole: req.body.userrole,
    });
    newUser.save({w: 1}, function(err, results){
        console.log("Record added as :",results);
        if(err){
            res.json({success: false, msg:"Faild to register user"});
        }else{
            res.status(200);
            res.json(results);
        }
    });
}

exports.getSuperiorUser = function(req, res) {
    User.find({userrole:"Superior"},function(err, data){
        if(err){
            res.status(500).json({errmsg: err});
        }else{
            res.status(200).json({response: data});
        }
    });
};

exports.getUsers = function(req, res) {
    User.find({userrole:{$ne:"Superior"}},function(err, data){
        if(err){
            res.status(500).json({errmsg: err});
        }else{
            res.status(200).json({response: data});
        }
    });
};

exports.updateUser = function(req, res){
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var userrole = req.body.userrole;

    User.update(
        {_id:id},
        { $set:{
            "name":name,
            "email":email,
            "username":username,
            "userrole":userrole
        }},function(err, results){
            if(err){
                res.status(500).json({errmsg: err});
            }else{
                res.status(200);
                res.json(results);
            }
        }
    );
}

exports.deletUser = function(req, res) {
    var id = req.params.id;

    User.remove(
        {_id:id},function(err, results){
            if(err){
                res.status(500).json({errmsg: err});
            }else{
                res.status(200).json({responce: results});
            }
        }
    );
};

module.exports.authenticate = function(req, res, next){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username:username}, (err, user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:"User not found"});
        }
        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret,{
                    expiresIn:20000 // second
                });
                res.json({
                    success:true,
                    token: 'Bearer '+token,
                    user:{
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        userrole: user.userrole
                    }
                });
            }else{
                return res.json({success: false, msg:"Password not match"});
            }
        });
    });
};

exports.restPassword = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var hash = bcrypt.hashSync(password, 10);
    // var aaa = bcrypt.compareSync(password, hash); // true
    // console.log(aaa)
    User.update(
        {email:email},
        {$set:{
            "password":hash,
        }},function(err, results){
            if(err){
                res.status(500).json({errmsg: err});
            }else{
                res.status(200);
                res.json(results);
            }
        }
    );
}
