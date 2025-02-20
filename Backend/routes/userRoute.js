import express  from 'express'
import { getProfile, loginUser, registerUser, updateProfile } from '../controller/userControler.js'
import authUser from '../middleware/authUser.js'
import upload from '../config/multer.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/get-profile', authUser, getProfile)
userRouter.post('/update-profile', upload.single('image') , authUser, updateProfile)



export default userRouter