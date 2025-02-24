import workermoModel from "../models/workerModel.js"


const workerlist = async(req, res) =>{
    try {
        
        const workers = await workermoModel.find({}).select('-password -email') 
        res.json( {success: true ,workers })

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export { workerlist }