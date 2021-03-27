const User = require('../models/blogs');

//This is objection's queries which is select automatic data

module.exports = class service {
    async findAll(txn){
        const user = User.query(txn);
        return user;
    }
 
    async blogcreate(details, user_id){
        console.log(details);
        details["user_id"]= user_id;
        details["date"] = new Date();
        const user = await  User.query().insertGraph(details);
        return user;

    }

    // async findById(userId){
    //     const user = await user.query().findById(userId);
    //     if (user === undefined) {
    //         return ({"sorry": "userId " + userId + " not found!"})
    //     }
    //     console.log(user);
    //     return user
    // }

    async userUpdate(user_details,id,user_id) {
        user_details["user_id"]= user_id
        user_details["date"] = new Date();
        console.log(user_details);
        const userUpdate = await User.query().findById(id).patch(user_details);
        return userUpdate;
    }

    async deleteById(deleteId){
        const user = await User.query().deleteById(deleteId)
        return user;
    }
}