import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './router/router.js'
let app = express();
dotenv.config()
app.use(cors({origin : 'http://localhost:5173', credentials : true}))
app.use(morgan('tiny'))
app.use(express.json())
let PORT = process.env.PORT || 6000
let MONGOOSE_URL = process.env.MONGOOSE_URL
mongoose.connect(MONGOOSE_URL).then((res) => {app.listen(PORT,() => {console.log(`listening on port ${PORT}`)})}).catch((err) => console.log(err))
mongoose.connection.on('connected',() => console.log('app connected!'))
mongoose.connection.on('disconnected',() => console.log('app disconnected!'))
app.use('/api/task',router)
app.use((err,req,res,next) => {
    let errormessage = err.message;
    let errorstatus = err.status;
    res.status(errorstatus).json(errormessage);
})