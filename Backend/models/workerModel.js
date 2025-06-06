import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    name:{type:String , required: true},
    email:{type:String , required: true, unique:true},
    password:{type:String , required: true},
    image:{type:String , required: true},
    speciality:{type:String , required: true},
    experience:{type:String , required: true},
    about:{type:String , required: true},
    available:{type:Boolean , default:true},
    fees:{type:Number , required: true},
    date:{type:Number , required: true},
    slots_booked: {type:Object, default:{}}
},{minimize:false})

const workermoModel = mongoose.model.worker || mongoose.model('worker', workerSchema)

export default workermoModel