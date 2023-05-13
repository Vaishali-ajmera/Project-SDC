const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    "personal": {
        "name": String,
        "gender": String,
        "designation": String,
        "DOB": Date,
        "PAN":String
    },
    "experience": {
        teachingExp: Number,
        industryExp: Number,
        currentlyWorking: String,
        associationType: String,
        dateOfJoining: Date,
    }

});

const facultyModel = mongoose.model('faculty', facultySchema);

module.exports = facultyModel;