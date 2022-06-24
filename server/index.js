const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MicroreactorsModel = require('./models/microreactors');

const cors = require("cors");

mongoose.connect("mongodb+srv://sebastian:sebzxp@cluster0.imysk4w.mongodb.net/?retryWrites=true&w=majority");

app.use(express.json());
app.use(cors());

app.get("/getMicroreactors", (req, res) => {
    MicroreactorsModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });

});

app.post("/postMicroreactor", async (req, res) => {
    const mr = req.body;
    const newMr = new MicroreactorsModel(mr);
    await newMr.save();

    res.json(mr);
    
    

});



app.listen(3001, () => {
    console.log("server running");
});