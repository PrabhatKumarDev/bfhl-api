import express from 'express';
import {handleBfhlRequest} from '../controllers/bfhl.controller.js';    

const router = express.Router();   
router.post('/', handleBfhlRequest);
export default router;