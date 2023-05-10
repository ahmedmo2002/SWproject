import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const app = express();

mongoose.connect(process.env.mongoconnect) 

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(process.env.portnum, ()=>(

    console.log(`Start the application on http://localhost:`+process.env.portnum)
));