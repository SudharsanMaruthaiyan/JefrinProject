import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import { adminRouter } from './routes/adminRoute.js'
import { workerRoute } from './routes/workerRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api end points
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/worker',workerRoute)
// localhost:4000/api/admin/add-worker

// end point
app.get("/", (req,res)=>{
    res.send("api working Grate for jefrin")
})


app.listen(port, ()=> console.log("Server Started", port))