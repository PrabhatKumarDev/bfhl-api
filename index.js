import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bfhlRoute from './routes/bfhl.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/bfhl', bfhlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});