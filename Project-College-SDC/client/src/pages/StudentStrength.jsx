import React, { useState } from "react";
import axios from 'axios'

const StudentStrength = () => {
    const [studentStrength, setStudentStrength] = useState({
        ug3: {
            male: 0,
            female: 0,
            total: 0,
            withinState: 0,
            outsideState: 0,
            outsideCountry: 0,
            economicallyBackward: 0,
            sociallyChallenged: 0,
        },
        fullTutionR: {
            stateCentral: 0,
            institute: 0,
            private: 0,
            notReceiving: 0,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const category = name.split("-")[0];
        const key = name.split("-")[1];

        setStudentStrength((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [key]: value,
            },
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axios.post('/api/student-strength',studentStrength);
      
          console.log('Data sent successfully:', response.data);
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mt-8 mb-2 text-center">Student Strength Form</h2>
            <fieldset className="border p-4 rounded-lg mb-6">
                <legend className="text-lg font-bold mb-2">UG3</legend>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="ug3-male" className="block text-gray-700 font-bold mb-2">
                            Male:
                        </label>
                        <input
                            type="number"
                            id="ug3-male"
                            name="ug3-male"
                            value={studentStrength.ug3.male}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                    <div>
                        <label htmlFor="ug3-female" className="block text-gray-700 font-bold mb-2">
                            Female:
                        </label>
                        <input
                            type="number"
                            id="ug3-female"
                            name="ug3-female"
                            value={studentStrength.ug3.female}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                
                <div >
                    <label htmlFor="ug3-total" className="block text-gray-700 font-bold mb-2">
                        Total:
                    </label>
                    <input
                        type="number"
                        id="ug3-total"
                        name="ug3-total"
                        value={studentStrength.ug3.total}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                    />
                </div>
                </div>
                <div className="grid  grid-cols-3  gap-4 mt-4">
                    <div>
                        <label htmlFor="ug3-withinState" className="block text-gray-700 font-bold mb-2">
                            Within State:
                        </label>
                        <input
                            type="number"
                            id="ug3-withinState"
                            name="ug3-withinState"
                            value={studentStrength.ug3.withinState}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                
                
                
                    <div>
                        <label htmlFor="ug3-outsideState" className="block text-gray-700 font-bold mb-2">
                            Outside State:
                        </label>
                        <input
                            type="number"
                            id="ug3-outsideState"
                            name="ug3-outsideState"
                            value={studentStrength.ug3.outsideState}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                   
                
                
                    <div>
                        <label htmlFor="ug3-outsideCountry" className="block text-gray-700 font-bold mb-2">
                            Outside Country:
                        </label>
                        <input
                            type="number"
                            id="ug3-outsideCountry"
                            name="ug3-outsideCountry"
                            value={studentStrength.ug3.outsideCountry}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                    </div>

                
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="ug3-economicallyBackward" className="block text-gray-700 font-bold mb-2">
                            Economically Backward:
                        </label>
                        <input
                            type="number"
                            id="ug3-economicallyBackward"
                            name="ug3-economicallyBackward"
                            value={studentStrength.ug3.economicallyBackward}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                 <div>
                        <label htmlFor="ug3-sociallyChallenged" className="block text-gray-700 font-bold mb-2">
                            Socially Challenged:
                        </label>
                        <input
                            type="number"
                            id="ug3-sociallyChallenged"
                            name="ug3-sociallyChallenged"
                            value={studentStrength.ug3.sociallyChallenged}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                </div>
            </fieldset>


            <fieldset className="border p-4 rounded-lg mb-6">
                <legend className="text-lg font-bold mb-2">Full Time Reimbursement</legend>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="fullTutionR-stateCentral" className="block text-gray-700 font-bold mb-2">
                            State Central:
                        </label>
                        <input
                            type="number"
                            id="fullTutionR-stateCentral"
                            name="fullTutionR-stateCentral"
                            value={studentStrength.fullTutionR.stateCentral}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                    <div>
                        <label htmlFor="fullTutionR-institute" className="block text-gray-700 font-bold mb-2">
                            Institute:
                        </label>
                        <input
                            type="number"
                            id="fullTutionR-institute"
                            name="fullTutionR-institute"
                            value={studentStrength.fullTutionR.institute}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                </div >
                   
                
                <div className="grid  grid-cols-2  gap-4 mt-4">
                    <div>
                        <label htmlFor="fullTutionR-private" className="block text-gray-700 font-bold mb-2">
                            Private:
                        </label>
                        <input
                            type="number"
                            id="fullTutionR-private"
                            name="fullTutionR-private"
                            value={studentStrength.fullTutionR.private}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>
                    <div>
                        <label htmlFor="fullTutionR-notReceiving" className="block text-gray-700 font-bold mb-2">
                            Not Receiving
                        </label>
                        <input
                            type="number"
                            id="fullTutionR-notReceiving"
                            name="fullTutionR-notReceiving"
                            value={studentStrength.fullTutionR.notReceiving}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                        />
                    </div>      
                </div>
            </fieldset>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-2xl mt-4 w-full" type="submit">Submit</button >

        </form>

    )
}

export default StudentStrength;