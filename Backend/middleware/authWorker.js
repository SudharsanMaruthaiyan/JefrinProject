import jwt from 'jsonwebtoken'

// doctor authetication midleware
const authWorker = async (req,res,next)=>{
    try {
        
        const {wtoken} = req.headers
        if(!wtoken){
            return res.json({success: false ,message:"not authorized login Again"})
        }
        const token_decode = jwt.verify(wtoken, process.env.JWT_SECRET)
        req.body.worId = token_decode.id
        next()

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export default authWorker