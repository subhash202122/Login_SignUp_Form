const mongoose = require("mongoose");
// schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age:{
       type:Number,
       required:true,
  },
  mobile:{
    type:Number,
    required:true,
  } ,
   gender:{
    type: String,
    required: true,
   },
  token: {
    type: String,
  },
  
});

module.exports = mongoose.model("user", UserSchema);