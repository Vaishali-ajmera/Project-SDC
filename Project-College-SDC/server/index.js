require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./connect')
const Router = require('./routers/Router')



const app = express()
const port = process.env.PORT || 5000;

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:5173"],
}




app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api',Router);




//Start Server
const startServer = async ()=>{
  try {
      connectDB(process.env.MONGODB_URL);
      app.listen(port, ()=> console.log('Server running on port ',port));
  } catch (error) {
      console.log(error);
  }

}
startServer();

module.exports = app

