//create a user
//bring in mongoose
const mongoose = require('mongoose');

//schema holds all fields that we want
//avatar allows you to attach a profile image to you email
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

//export 
//set a variable called User
//mongoose.model takes two things: model name, schema
module.exports = User = mongoose.model('user', UserSchema);