const mongoose = require("mongoose");

const MicroreactorSchema = new mongoose.Schema({
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
    }


});

const MicroreactorsModel = mongoose.model("microreactors", MicroreactorSchema);

module.exports = MicroreactorsModel;


