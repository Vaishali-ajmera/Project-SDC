const mongoose = require('mongoose');

const phdSDetailSchema = new mongoose.Schema({
 //student pursuing doctoral degree in year 2021-22 their strength is noted here.

    "fullTime": Number,
    "partTime": Number,
    "total": Number,
    
    "fullTime":{
        "2019": Number,
        "2020": Number,
        "2021": Number,
    },
    "partTime":{
        "2019": Number,
        "2020": Number,
        "2021": Number,
    },
    "fullTime":{
        "2019": Number,
        "2020": Number,
        "2021": Number,
    },

});

const phdSDetailModel = mongoose.model('phd', phdSDetailSchema);

module.exports = phdSDetailModel;