const mongoose = require("mongoose");

const MicroreactorSchema = new mongoose.Schema({

    user: {
        type: String
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

    tubing: [
        String
    ],

    run: false

});

const MicroreactorsModel = mongoose.model("microreactors", MicroreactorSchema);

module.exports = MicroreactorsModel;
