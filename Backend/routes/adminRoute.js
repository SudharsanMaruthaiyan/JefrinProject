import express from 'express';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../config/multer.js';
import { addworker, loginAdmin } from '../controller/adminController.js';

const adminRouter = express.Router();

adminRouter.post('/add-worker', authAdmin,upload.single('image'),addworker)
adminRouter.post('/login', loginAdmin)

export {adminRouter}
