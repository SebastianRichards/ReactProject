const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MicroreactorsModel = require('./models/microreactors');
const fs = require("fs");
const exec = require("child_process").exec;

const cors = require("cors");
const { stdout, stderr } = require("process");
const res = require("express/lib/response");

mongoose.connect("mongodb+srv://sebzxp:sebzxp@cluster0.vnar4r6.mongodb.net/?retryWrites=true&w=majority");

app.use(express.json());
app.use(cors());



const writeOpcuaServerT = (temp) => {

    fs.readFile('../../myserver/sample_server.js', 'utf-8', function (error, contents) {
        if (error) {
            console.log(err);
            return;
        }
 
    
    const replacedT = contents.replace(/let temperature =/g, `let temperature =${temp};//`);


    
    fs.writeFile('../../myserver/sample_server.js', replacedT, 'utf-8', function (err) {
        if (err) {
            console.log(err);
        }
        
        });
        

        
    });
    
}



//test opcua connection
testOpcuaClient = () => {
 
    exec('sh ../../sample_client_ts/initiate.sh', (error, stdout, stderr) => {
        
        if(error) {
            console.log(stderr);
            
    
            throw error;
            
        }
        console.log('stdout', stdout)
        
        return true;
    })
}




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



//run the server
runOpcuaServer = () => {
    exec('sh ../../myServer/initiate.sh', (error, stdout, stderr) => {
        if(error) {
            console.log(stderr);
            throw error;
        }
        console.log('stdout', stdout)
    })
}



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



app.get("/readOpcua", (req, res) => {
    readOpcuaClient();
    

});

app.get("/runOpcua", (req, res) => {
    runOpcuaClient();

});

app.get("/writeOpcua", (req, res) => {
    writeOpcuaClient();

});

app.get("/writeOpcuaServerRun", (req, res) => {
    exec('sh ../../myserver/initiate.sh', (error, stdout, stderr) => {
        if(error) {
            console.log(stderr);
            res.send(`Not connected error: ${error}`);
            throw error;
        }
        console.log('stdout + successful run', stdout)
        return;
    })
});

app.post("/writeOpcuaServer", async(req, res) => {

    console.log(res);
    temperatureString = String(temperature);
    console.log(temperatureString + "temp string");
    slicedTemperatureString = temperatureString.slice(16, -2);
    console.log(slicedTemperatureString);
    writeOpcuaServerT(slicedTemperatureString);
})

app.post("/postMicroreactor", async (req, res) => {
    const mr = req.body;
    const newMr = new MicroreactorsModel(mr);
    
    //updating the server file
    writeOpcuaServerT(mr.temperature);
    await newMr.save();
    //running the server file through child process
    runOpcuaServer()
    res.json(mr);

    
    

});


//maybe try asynch? idk
app.get("/testOpcua", (req, res) => {

   
    
    
        
        exec('sh ../../sample_client_ts/initiate.sh', (error, stdout, stderr) => {
            if(error) {
                console.log(stderr);
                res.send(`Not connected error: ${error}`);
                throw error;
            }
        
            if(stdout.substring(0,8) === "An error") {
                res.send("Error, please check terminal for details");
                console.log(stdout)
            } else {
                res.send(`Connection successful.`); }
                console.log(stdout)
            return;
        })
    
 
    

});




 

app.get("/getMicroreactors", (req, res) => {
    MicroreactorsModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    


});

/*app.post("/postMicroreactor", async (req, res) => {
    const mr = req.body;
    const newMr = new MicroreactorsModel(mr);
    await newMr.save();
    res.json(mr);
    
    

});*/

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    await MicroreactorsModel.findByIdAndRemove(id).exec();
    res.send("Item Deleted");
});




app.listen(3001, () => {
    console.log("server running");
});