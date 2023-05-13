// Executive Development Programme / Management Developement Programms
//sponsoredResearch related
const mongoose = require('mongoose');

const exeManaSchema = new mongoose.Schema({
   "tPrograms": {
    "2021": Number,
    "2020": Number,
    "2019": Number,
   },
   "tParticipants": {
    "2021": Number,
    "2020": Number,
    "2019": Number,
   },
   "amtR": {
    "2021": Number,
    "2020": Number,
    "2019": Number,
   },
   "amtW": {
    "2021": String,
    "2020": String,
    "2019": String,
   },
   

});

const exeManaModel = mongoose.model('executiveManagement', exeManaSchema);

module.exports = exeManaModel;