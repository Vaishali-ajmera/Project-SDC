//patents related
const mongoose = require('mongoose');

const iprSchema = new mongoose.Schema({
    "patentPublished": {
        2021: Number,
        2020: Number,
        2019: Number,
    },
    "patentsGranted": {
        2021: Number,
        2020: Number,
        2019: Number,
    },


});

const iprModel = mongoose.model('ipr', iprSchema);

module.exports = iprModel;