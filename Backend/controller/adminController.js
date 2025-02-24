import workermoModel from "../models/workerModel.js";
import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import jwt from 'jsonwebtoken'

const addworker = async (req,res)=>{
    try {
        
        const {name,email,password,speciality,experience,about,fees} = req.body;
        const imageFile = req.file;
        
        // checing for all data 
        if (!name || !email || !password || !speciality || !experience || !about || !fees ) {
            return res.json({success:false, message:"Missing Detais"})
        }

        // vaidating email formate
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // vaidating strong password 
        if (password.length < 8) {
            return res.json({success:false, message:"Please enter a Strong Password"})
        }

        // hashis doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const workerData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            experience,
            about,
            fees,
            date:Date.now()
        }

        const newWorker = new workermoModel(workerData)
        await newWorker.save()

        res.json({success:true, message:"Worker Added"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

const loginAdmin = async (req, res) =>{
    try {
        
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({success:true, token})

        } else{
            res.json({success:false, message:"Invalid Credentials"})
        }


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {addworker, loginAdmin}