
const jwt = require('jsonwebtoken');
const User = require('../models/users')
const cookie =require("cookie")

module.exports =async(req, res, next)=> {
    try {
        var authHeader = req.cookies.user_token || req.body.token || req.headers.cookie;
        var token = authHeader && authHeader.split(' ')[0]
        if (authHeader == undefined) {
            res.send({"error": "token not found!"})

        }else{
            
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            let data = await User.query().select().where("email",decoded.email)
            let id = (data[0].id)
            console.log(id);
            req.id = id;
            req.decode = decoded;
            next(); // pass the execution off to whatever request the client intended
        }

    } catch (error) {
        console.log(error,"This is token error, please check it");
        req.Error =error.message
        next()        
    }
}
