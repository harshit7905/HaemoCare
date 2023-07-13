const express= require('express');
const dotenv= require('dotenv');
const morgan =require('morgan');
const colors=require('colors');
const cors= require('cors');
const connectDB = require('./config/db.js');
const path = require('path');

dotenv.config();

//mongo db connection
connectDB();

//rest object
const app=express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// //STATIC FOLDER
// app.use(express.static(path.join(__dirname,'./client/build')))

// //STATIC ROUTES
// app.get('*',function(req,res){
//     res.sendFile(path.join(__dirname,'./client/build/index.html'));
// })


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(`Node server running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
    .bgBlue.white);
})

