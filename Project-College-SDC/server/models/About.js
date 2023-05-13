//sponsoredResearch related
const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    "collegeList": {
        "name": String,
        "address": String,
        "yrEstablish": Number
    },
    "campusList": {
        "name": String,
        "address": String,
        "yrEstablish": Number
    },


});

const aboutModel = mongoose.model('about', aboutSchema);

module.exports = aboutModel;