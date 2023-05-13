const mongoose = require('mongoose');

const onlineEduSchema = new mongoose.Schema({
    //C: Completed S:Syllabus
    "courseCompletedTime": Boolean,
    "measureToCompleteSyllabus": String,
    "delaySyllabus": Number,
    "delayExams": Number,
    "details": {

    }

});

const onlineEduModel = mongoose.model('onlineEducation', onlineEduSchema);

module.exports = onlineEduModel;