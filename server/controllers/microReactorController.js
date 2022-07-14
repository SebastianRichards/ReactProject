const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Microreactor = require('../models/microreactors');
const MicroreactorsModel = require('../models/microreactors');


//function that gets the microreactors 
const getMicroreactors = asyncHandler(async (req, res) => {
    MicroreactorsModel.find({ user: req.user.id }, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    
});

const setMicroreactor = asyncHandler( async (req, res) => {
    let mr = req.body;
    //user: req.user.id
    let newMr = new MicroreactorsModel(mr);
    await newMr.save();

    res.json(mr);
    
    

});

const deleteMicroreactor = asyncHandler(async(req, res) => {
    res.json({message: "temporary"})
})






module.exports = {
    getMicroreactors,
    setMicroreactor,
    deleteMicroreactor,
}