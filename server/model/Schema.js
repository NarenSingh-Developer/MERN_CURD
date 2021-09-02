const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name : {
        type : String, 
        require : true
    },
    username : {
        type : String, 
        require : true
    },
    email : {
        type : String, 
        require : true
    },
    phone : {
        type : Number, 
        require : true
    },
    password : {
        type : String, 
        require : true
    },
    cpassword : {
        type : String, 
        require : true
    }
})

const schema = mongoose.model("CURD" , Schema);
module.exports = schema;