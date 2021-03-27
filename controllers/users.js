const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../services/users');
const cookie = require('cookie');
const Service = new User();
router.get('/',async(req,res)=>{
    try{
        res.send({msg:"index is working"})
    }
    catch(err){
        console.log(err);
    }

})

router.post('/signup',async(req,res)=>{
    try {
        await Service.insert(req.body)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            console.log(err);
        })
        
    } catch (error) {
        console.log(error);
        
    }

})

router.post('/login',async(req,res)=>{
    try {
        const body = req.body;

        await Service.login(body)
        .then((d)=>{
            if (d!=false){
                if (d!=true){
                    res.cookie('user_token',d);
                    res.send({msg: "you are logged in successfully!"})
                }else{
                    res.send({msg:"plz enter your correct password"})
                }
            }else{
                res.send({msg:"Plz Signup first"})
            }
            
        })
        .catch((errr)=>{
            res.send({err:errr})
        })
    } catch (error) {
        res.send(error);
        console.log(error);
        
    }
});


module.exports =router;