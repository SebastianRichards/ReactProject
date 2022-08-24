const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MicroreactorsModel = require('./models/microreactors');
const fs = require("fs");
const exec = require("child_process").exec;


//run the file

runOpcuaClient = () => {
    exec('sh ../../sample_client_ts/initiate.sh', (error, stdout, stderr) => {
        if(error) {
            console.log(stderr);
            throw error;
        }
        console.log('stdout', stdout)
    })
}

runOpcuaClient();



runOpcuaClient();
//OPC UA client functions

//read the client file
readOpcuaClient = () => {
    fs.readFile('../../sample_client_ts/sample_client.js', 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(data);
    })

}




//write the client file
writeOpcuaClient = () => {
    fs.appendFile('../../sample_client_ts/sample_client.js', content, err => {
        if(err) {
            console.log(err)
            return
        }
        console.log("opcua client updated")
        
    })
}






const cors = require("cors");
const { stdout, stderr } = require("process");

mongoose.connect("mongodb+srv://sebzxp:sebzxp@cluster0.fhlfvdk.mongodb.net/mongodbServer?retryWrites=true&w=majority");

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

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    await MicroreactorsModel.findByIdAndRemove(id).exec();
    res.send("Item Deleted");
});



app.listen(3001, () => {
    console.log("server running");
});