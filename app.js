const express = require('express');
const cookiePar = require('cookie-parser');
const app = express();
app.use(cookiePar());
// const cors = require('cors');
app.use(express.json());


const PORT = process.env.PORT ||5000

const router = require('./controllers/users')
const route = require('./controllers/blogs')
const path = require('./controllers/likeDislike')
app.use(router)
app.use(route)
app.use(path)

// app.use(cors)

app.get('/app',(req,res)=>{
    res.send("hi how are uoi ")
})

 

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT} `);
})

