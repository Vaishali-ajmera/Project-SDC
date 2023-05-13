const mongoose = require('mongoose');

const StudentIntakeSchema = new mongoose.Schema({
    //number of students intake in various courses and in different years
 "ug3":{
    "2019":Number,
    "2020":Number,
    "2021":Number,
 },
 "ug4":{
    "2018":Number,
    "2019":Number,
    "2020":Number,
    "2021":Number,
 },
 "ug5":{
    "2017":Number,
    "2018":Number,
    "2019":Number,
    "2020":Number,
    "2021":Number,
 },
 "ug6":{
    "2016":Number,
    "2017":Number,
    "2018":Number,
    "2019":Number,
    "2020":Number,
    "2021":Number,
 },
 "pg1":{
   
    "2021":Number,
 },
 "pg2":{
    
    "2020":Number,
    "2021":Number,
 },
 "pg3":{
    
    "2019":Number,
    "2020":Number,
    "2021":Number,
 },
 "pg5":{
 
    "2017":Number,
    "2018":Number,
    "2019":Number,
    "2020":Number,
    "2021":Number,
 },
 "pg6":{
    "2016":Number,
    "2017":Number,
    "2018":Number,
    "2019":Number,
    "2020":Number,
    "2021":Number,
 },
});

const StudentIntakeModel = mongoose.model('StudentIntake', StudentIntakeSchema);

module.exports = StudentIntakeModel;