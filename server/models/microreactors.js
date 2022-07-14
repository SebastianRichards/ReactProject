const mongoose = require("mongoose");

const MicroreactorSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },

    name: {
        type: Number 
    },

    electrodeOne: {
        type: String
    },

    electrodeTwo: {
        type: String
    },

    temperature: {
        type: String
    },
    
    pressure: {
        type: String
    },

    flowRate: {
        type: String
    },

    reagentOne: {
        type: String
    },

    reagentTwo: {
        type: String

    },

    electrodeArea: {
        type: String
    },

    electrodeDistance: {
        type: String
    },

    vcTemp: [
        String,
    ],
    
    vcTempTime: [
        String
    ],

    vcPressure: [
        String,
    ],

    vcPressureTime: [
        String,
    ],

    vcFlowRate: [
        String,
    ],

    vcFlowRateTime: [
        String
    ],

    tubing: [{
        length: String,
        diameter: String,
        loops: String,
        material: String}],

});



const MicroreactorsModel = mongoose.model("microreactors", MicroreactorSchema);


module.exports = MicroreactorsModel;



