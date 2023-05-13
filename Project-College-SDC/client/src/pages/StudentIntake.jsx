import React, { useState } from 'react';
import axios from 'axios';

function StudentIntake() {
    const [formData, setFormData] = useState({
        ug3: {
            2019: 0,
            2020: 0,
            2021: 0,
        },
        ug4: {
            2018: 0,
            2019: 0,
            2020: 0,
            2021: 0,
        },
        ug5: {
            2017: 0,
            2018: 0,
            2019: 0,
            2020: 0,
            2021: 0,
        },
        ug6: {
            2016: 0,
            2017: 0,
            2018: 0,
            2019: 0,
            2020: 0,
            2021: 0,
        },
        pg1: {
            2021: 0,
        },
        pg2: {
            2020: 0,
            2021: 0,
        },
        pg3: {
            2019: 0,
            2020: 0,
            2021: 0,
        },
        pg5: {
            2017: 0,
            2018: 0,
            2019: 0,
            2020: 0,
            2021: 0,
        },
        pg6: {
            2016: 0,
            2017: 0,
            2018: 0,
            2019: 0,
            2020: 0,
            2021: 0,
        },
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const [degree, year] = name.split('-');

        setFormData((prevData) => ({
            ...prevData,
            [degree]: {
                ...prevData[degree],
                [year]: Number(value),
            },
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axios.post('/api/student-intake', formData);
          console.log(response.data); // log the response from the server
        } catch (error) {
          console.error(error); // log any errors that occur
        }
      };

    return (
        <div className="container mx-auto mt-8 " >
            <h1 className="text-3xl font-bold mb-4 text-center">Student Intake Form</h1 >

            <form onSubmit={handleSubmit} className="bg-white shadow-xl  border rounded px-8 pt-6 pb-8 mb-4" >
                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug3-2019">UG3 - 2019:</label >
                    <input
                        type="number"
                        name="ug3-2019"
                        value={formData.ug3[2019]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug3-2020">UG3 - 2020:</label >
                    <input
                        type="number"
                        name="ug3-2020"
                        value={formData.ug3[2020]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug3-2021">UG3 - 2021:</label >
                    <input
                        type="number"
                        name="ug3-2021"
                        value={formData.ug3[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                </div>

                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug4-2018">UG4 - 2018:</label >
                    <input
                        type="number"
                        name="ug4-2018"
                        value={formData.ug4[2018]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug4-2019">UG4 - 2019:</label >
                    <input
                        type="number"
                        name="ug4-2019"
                        value={formData.ug4[2019]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug4-2020">UG4 - 2020:</label >
                    <input
                        type="number"
                        name="ug4-2020"
                        value={formData.ug4[2020]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug4-2021">UG4 - 2021:</label >
                    <input
                        type="number"
                        name="ug4-2021"
                        value={formData.ug4[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                </div>

                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug5-2017">UG5 - 2017:</label >
                    <input
                        type="number"
                        name="ug5-2017"
                        value={formData.ug5[2017]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug5-2018">UG5 - 2018:</label >
                    <input
                        type="number"
                        name="ug5-2018"
                        value={formData.ug5[2018]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug5-2019">UG5 - 2019:</label >
                    <input
                        type="number"
                        name="ug5-2019"
                        value={formData.ug5[2019]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug5-2020">UG5 - 2020:</label >
                    <input
                        type="number"
                        name="ug5-2020"
                        value={formData.ug5[2020]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug5-2021">UG5 - 2021:</label >
                    <input
                        type="number"
                        name="ug5-2021"
                        value={formData.ug5[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                </div>


                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug6-2016">UG6 - 2016:</label >
                    <input
                        type="number"
                        name="ug6-2016"
                        value={formData.ug6[2016]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug6-2017">UG6 - 2017:</label >
                    <input
                        type="number"
                        name="ug6-2017"
                        value={formData.ug6[2017]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug6-2018">UG6 - 2018:</label >
                    <input
                        type="number"
                        name="ug6-2018"
                        value={formData.ug6[2018]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug6-2019">UG6 - 2019:</label >
                    <input
                        type="number"
                        name="ug6-2019"
                        value={formData.ug6[2019]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug6-2020">UG6 - 2020:</label >
                    <input
                        type="number"
                        name="ug6-2020"
                        value={formData.ug6[2020]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="ug6-2021">UG6 - 2021:</label >
                    <input
                        type="number"
                        name="ug6-2021"
                        value={formData.ug6[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                </div>

                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg1-2021">PG1 - 2021:</label >
                    <input
                        type="number"
                        name="pg1-2021"
                        value={formData.pg1[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg2-2020">PG2 - 2020:</label >
                    <input
                        type="number"
                        name="pg2-2020"
                        value={formData.pg2[2020]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg2-2021">PG2 - 2021:</label >
                    <input
                        type="number"
                        name="pg2-2021"
                        value={formData.pg2[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                </div>

                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg3-2019">PG3 - 2019:</label >
                    <input
                        type="number"
                        name="pg3-2019"
                        value={formData.pg3[2019]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg3-2020">PG3 - 2020:</label >
                    <input
                        type="number"
                        name="pg3-2020"
                        value={formData.pg3[2020]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg3-2021">PG3 - 2021:</label >
                    <input
                        type="number"
                        name="pg3-2021"
                        value={formData.pg3[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                </div>

                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg5-2017">PG5 - 2017:</label >
                    <input
                        type="number"
                        name="pg5-2017"
                        value={formData.pg5[2017]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg5-2018">PG5 - 2018:</label >
                    <input
                        type="number"
                        name="pg5-2018"
                        value={formData.pg5[2018]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg5-2019">PG5 - 2019:</label >
                    <input
                        type="number"
                        name="pg5-2019"
                        value={formData.pg5[2019]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg5-2020">PG5 - 2020:</label >
                    <input
                        type="number"
                        name="pg5-2020"
                        value={formData.pg5[2020]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg5-2021">PG5 - 2021:</label >
                    <input
                        type="number"
                        name="pg5-2021"
                        value={formData.pg5[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                </div>

                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg6-2016">PG6 - 2016:</label >
                    <input
                        type="number"
                        name="pg6-2016"
                        value={formData.pg6[2016]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg6-2017">PG6 - 2017:</label >
                    <input
                        type="number"
                        name="pg6-2017"
                        value={formData.pg6[2017]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg6-2018">PG6 - 2018:</label >
                    <input
                        type="number"
                        name="pg6-2018"
                        value={formData.pg6[2018]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg6-2019">PG6 - 2019:</label >
                    <input
                        type="number"
                        name="pg6-2019"
                        value={formData.pg6[2019]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg6-2020">PG6 - 2020:</label >
                    <input
                        type="number"
                        name="pg6-2020"
                        value={formData.pg6[2020]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                    <label className="block text-gray-700 font-bold mb-3" htmlFor="pg6-2021">PG6 - 2021:</label >
                    <input
                        type="number"
                        name="pg6-2021"
                        value={formData.pg6[2021]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-2xl mt-4 w-full" type="submit">Submit</button >
            </form>
        </div>
    );
}

export default StudentIntake;
