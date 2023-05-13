
const StudentIntakeModel = require('../models/StudentIntakeModel');
const StudentStrengthModel = require('../models/StudentStrengthModel');


 const studentIntake =  async (req, res) => {
  try {
    const studentIntakeData = req.body; // get the student intake data from the request body
    const studentIntake = await StudentIntakeModel.create(studentIntakeData); // create a new document in the database using the model and the data
    res.status(201).json(studentIntake); // send a response back to the frontend with the saved data
  } catch (error) {
    console.error(error); // log any errors that occur
    res.status(500).json({ message: 'Internal server error' }); // send an error response back to the frontend
  }
};

 const studentStrength = async (req, res) => {
    const studentStrength = req.body;
  
    try {
      const result = await StudentStrengthModel.create(studentStrength);
  
      res.status(201).json(result);
    } catch (error) {
      console.error('Error saving student strength data:', error);
  
      res.status(500).json({ error: 'Error saving student strength data' });
    }
  };


  module.exports = { studentIntake, studentStrength };