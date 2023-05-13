//sponsoredResearch related
const mongoose = require('mongoose');

const sponsoredResearchSchema = new mongoose.Schema({
   "projects": {
    "2021": Number,
    "2020": Number,
    "2019": Number,
   },
   "fundingAgencies": {
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

const sponsoredResearchModel = mongoose.model('sponsoredResearch', sponsoredResearchSchema);

module.exports = sponsoredResearchModel;