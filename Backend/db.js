
//import mongoose, { Types } from "mongoose";

//import mongoose from 'mongoose';

//import mongoose from "mongoose";
const  mongoose = require('mongoose');
console.log('mongoos Connected');

const {Schema} = mongoose; 

const userSchema  = new Schema({
    email : {type : String , unique: true},
    password : String, 
    firstName :String, 
    lastName : String
})
const adminSchema  = new Schema({
    email : {type : String , unique: true},
    password : String, 
    firstName :String, 
    lastName : String
})
const courseSchema = new Schema({
    title: String , 
    description : String, 
    price : Number, 
    imageURL: String,
    creatorId : {type: mongoose.Types.ObjectId , ref : "admin_schema"}
})

const purchasedSchema = new Schema({
    courseId : {type: mongoose.Types.ObjectId , ref : "course_schema"},
    userId :{type : mongoose.Types.ObjectId , ref : 'user_schema'}
})

const user_schema   = mongoose.model('user_schema' , userSchema);
const admin_schema   = mongoose.model('admin_schema' , adminSchema);
const course_schema  = mongoose.model('course_schema' , courseSchema);
const purchased_schema   = mongoose.model('purchased_schema' , purchasedSchema);

module.exports = {
    user_schema,
    admin_schema,
    course_schema,
    purchased_schema,
    mongoose
 };