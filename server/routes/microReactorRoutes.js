const express = require('express');
const router = express.Router();
const { getMicroreactors, setMicroreactor, deleteMicroreactor } = require('../controllers/microReactorController')

const {protect} = require('../middleware/authMiddleware')


router.get('/', protect, getMicroreactors)
router.post('/create', setMicroreactor)
router.delete('/:id', protect, deleteMicroreactor)




module.exports = router

/* 
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

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    await MicroreactorsModel.findByIdAndRemove(id).exec();
    res.send("Item Deleted");
})

*/