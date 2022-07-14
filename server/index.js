const express = require("express");
const dotenv = require('dotenv').config()
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3001

const cors = require("cors");
const { response } = require("express");

mongoose.connect("mongodb+srv://sebastian:sebzxp@cluster0.imysk4w.mongodb.net/?retryWrites=true&w=majority");

app.use(express.json());
app.use(cors());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/microreactors', require('./routes/microReactorRoutes'));




app.listen(port, () => {
    console.log("server running");
});