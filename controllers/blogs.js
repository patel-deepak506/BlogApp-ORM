const express = require('express');
const route = express.Router();
const User = require('../services/blogs');
const { reset } = require('nodemon');
const jwt = require('jsonwebtoken');
const Auth = require('../auth/jwt');

const Service = new User();

route.get("/jwt",Auth,(req,res)=>{
    res.send("jwt routers")
})

route.post('/insert_blog',Auth,async(req,res)=>{
    try {
  
        let user_id= req.id;
        await Service.blogcreate(req.body,user_id)
        .then(data=>{
            console.log("data insert successfully...");
            res.send("data insert successfully...")

        })
        .catch(err=>{
            console.log(err);
            res.send(err)
        })
        
    } catch (error) {
        console.log(error)
        res.send({err:error})
    }
})


route.get('/all_data',async(req,res)=>{
    console.log("hi all data how aew you");
    try {
        await Service.findAll()
        .then((data)=>{
            res.send(data)
        })
    } catch (error) {
        res.send(error);
        console.log(error);
        
    }
})

route.put('/update/:id',Auth,async(req,res)=>{

    try {
        id = req.params.id;
        let user_id= req.id;
        await Service.userUpdate(req.body,id,user_id)
        .then(data=>{
            if(data!=0){
                res.send("blog update successfully...")
                console.log(data);
            }else{
                res.send(`there is no data in your database in this id:${id}`)
                console.log(`there is no data in your database in this id:${id}`)
            }

        }).catch(err=>{
            console.log(err);
            res.send(err)
        })
    } catch (error) {
        console.log(error);

        
    }

});

route.delete('/delete_blog/:id',Auth,async(req,res)=>{
    try {
        let deleteId = req.params.id;
        await Service.deleteById(deleteId)
        .then(data=>{
            res.send("your BLOGS has been deleted successfullly...")
        }).catch(err=>{
            console.log(err);
            res.send(err)
        })
        
    } catch (error) {
        console.log(error);
        res.send(error);
        
    }
})

module.exports = route;