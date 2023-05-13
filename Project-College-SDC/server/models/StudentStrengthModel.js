const mongoose = require('mongoose');

const studentStrengthSchema = new mongoose.Schema({
    //all students studying in 1st 2nd and 3rd year are in ug3 courses their strength
 "ug3":{
    "male":Number,
    "female":Number,
    "total":Number,
    "withinState":Number,
    "outsideState":Number,
    "outsideCountry":Number,
    "economicallyBackward":Number,
    "sociallyChallenged":Number,
 },
//  fullTutionReimbursement from various bodies
 "fullTutionR":{
    "stateCentral": Number,
    "institute": Number,
    "private": Number,
    "notReceiving": Number,
 }

 
});

const studentStrengthModel = mongoose.model('StudentStrength', studentStrengthSchema);

module.exports = studentStrengthModel;