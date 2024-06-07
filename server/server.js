import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from "./config/mongoose.config.js";
import bookRouter from "./routes/book.route.js";

const app = express()
app.use(express.json(), cors())
app.use('/book', bookRouter)
dotenv.config()
const PORT = process.env.PORT
dbConnect()


app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );
