import validator from 'validator';
import bcrypt from 'bcrypt'
import userModel from '../models/userMode.js';
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import workermoModel from '../models/workerModel.js';
import appointmentModel from '../models/appointmentModel.js';

//api to register  user
const registerUser = async (req,res)=>{
    try {
        
        const {name, email, password} = req.body;
        if (!name || !password || !email) {
            return res.json({success:false , message:"Missing Details"})
        }  
        
        // validating email formate
        if (!validator.isEmail(email)) {
            return res.json({success:false , message:"Enter the Valid Email"})
        }

        // validating strong password 
        if (password.length < 8) {
            return res.json({success:false , message:"Enter the Strong Password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user =  await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        
        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// api for user login 
const loginUser = async (req,res)=>{
    
    try {
        
        const {email, password} = req.body;
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({success:false, message:'User dones not exist'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true, token})
        }
        else{
            res.json({success:false, message:"Invalid Credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

// api to get user profile data 
const getProfile = async (req,res) =>{

    try {
        
        const {userId} = req.body;
        const userData = await userModel.findById(userId).select('-password')

        res.json({success:true , userData})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

// api to update user profile 
const updateProfile = async (req, res)=>{
    try {

        const {userId, name, phone, address, dob, gender} = req.body;
        const imageFile = req.file

        if (!name || !phone || !dob || !gender) {
            return res.json({success:false, message:"data missing"})
        }

        await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})

        if (imageFile) {
            
            // upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageURL})
        }

        res.json({success:true, message:"profile updated"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// api to book appointment 
const bookAppointment = async (req,res)=>{
    try {
        const {userId, worId, slotDate, slotTime} = req.body
        const worData = await workermoModel.findById(worId).select('-password')

        if (!worData.available) {
            return res.json({success:false, message:'doctor not available'})
        } 

        let slots_booked = worData.slots_booked

        // checking for slot avalability
        if(slots_booked[slotDate]){
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({success:false, message:'doctor not available'})
            }
            else{
                slots_booked[slotDate].push(slotTime)
            }
        }
        else{
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select("-password")
        delete worData.slots_booked

        const appointmentData = {
            userId,
            worId,
            userData,
            worData,
            amount:worData.fees,
            slotTime,
            slotDate,
            date:Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save() 

        // save new slots data in worData
        await workermoModel.findByIdAndUpdate(worId,{slots_booked})

        res.json({success:true, message:"Appointment Booked"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}

export {loginUser , registerUser , getProfile, updateProfile, bookAppointment}

