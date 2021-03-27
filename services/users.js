const User = require('../models/users');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');



//This is objection's queries which is select automatic data

module.exports = class service {
 
    async insert(details){
        console.log(details);
        let password = details.password;
        password = await bcrypt.hash(password,1);
        details['password'] = password
        const user = await  User.query().insertGraph(details);
        return user;
    }
    async login(login_data){
        try{
            const token = jwt.sign(login_data,process.env.SECRET_KEY);
            let email = login_data.email;
            let password = login_data.password;
            let hasp = await User.query().select('password').where('email',email)
            if (hasp.length!=0){
                hasp = hasp[0].password;
                let check = await bcrypt.compare(password,hasp);
                if (check){
                    return token
                }else{
                    return true
                }

            }else{
                return false
            }

        }
        catch(error){
            console.log(error);
            res.send(error)
        }

    }

}