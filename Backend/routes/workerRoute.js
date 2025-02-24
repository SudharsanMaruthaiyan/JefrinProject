import express from 'express';
import { workerlist } from '../controller/workerControler.js';

const workerRoute = express.Router();

workerRoute.get('/list', workerlist)

export {workerRoute}