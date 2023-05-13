const mongoose = require('mongoose');

//placement and higher studies for previous three years
const placementHigherStudiesSchema = new mongoosei.Schema({
    "firstYIntake":{
        "2017":Number,
        "2018":Number,
        "2019":Number,
    },
    "firstYAdmitted":{
        "2018":Number,
        "2019":Number,
        "2020":Number,
    },
    "lateralEntry":{
        "2018":Number,
        "2019":Number,
        "2020":Number,
    },

});

const placementHigherStudiesModel = mongoose.model('placement', placementHigherStudiesSchema);

module.exports = placementHigherStudiesModel;