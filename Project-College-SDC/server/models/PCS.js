//Physically challenged students
//details of Financial Resources
const mongoose = require('mongoose');

const pcsSchema = new mongoose.Schema({
    "liftRamps": String,
    "walkingAids":Boolean,
    "specialToilets":String,

});

const pcsModel = mongoose.model('pcs', pcsSchema);

module.exports = pcsModel;