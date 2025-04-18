import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
// Coustom Router
import userRouter from './routes/userRoutes';

dotenv.config()
const app = express();

app.use(express.json())
app.use(cookieParser)
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("Comming From ROOT directroy")
});

app.use('/api/users', userRouter)

app.listen(process.env.PORT, () => {
    console.log(`Backend is running on ${process.env.PORT}`);
})

