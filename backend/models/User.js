// const mongoose=require("mongoose")

// const {Schema}=mongoose;

// const UserSchema=new Schema({
//   name:{
//     type:String,
//     required:true,

//   },
//   location:{
//     type:String,
//     required:true
//   },
//   email:{
//     type:String,
//     required:true
//   },
//   password:{
//     type:String,
//     required:true
//   },
//   date:{
//     type:Date,
//     default:Date.now
//   }
// });

// module.exports=mongoose.module('user',UserSchema)

const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the User schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true, // Optional: Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the User model
module.exports = mongoose.model("User", UserSchema);
