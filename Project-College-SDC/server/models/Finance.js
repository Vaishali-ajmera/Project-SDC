//details of Financial Resources
const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
    //amtR: amt in Rupees
    //amtW: amount in Words
    "capitalExp": {
        "library": {
            "amtR": {
                "2021": Number,
                "2020": Number,
                "2019": Number,
            },
            "amtW": {
                "2021": String,
                "2020": String,
                "2019": String,
            }
        },
        "newEquipLab": {
            "amtR": {
                "2021": Number,
                "2020": Number,
                "2019": Number,
            },
            "amtW": {
                "2021": String,
                "2020": String,
                "2019": String,
            }
        },
        "equipWorkshops": {
            "amtR": {
                "2021": Number,
                "2020": Number,
                "2019": Number,
            },
            "amtW": {
                "2021": String,
                "2020": String,
                "2019": String,
            }
        },
        "studios": {
            "amtR": {
                "2021": Number,
                "2020": Number,
                "2019": Number,
            },
            "amtW": {
                "2021": String,
                "2020": String,
                "2019": String,
            }
        },
        "otherExp": {
            "amtR": {
                "2021": Number,
                "2020": Number,
                "2019": Number,
            },
            "amtW": {
                "2021": String,
                "2020": String,
                "2019": String,
            }
        },
    },


    "operationalExp": {
        "salary": {
            "amtR": {
                "2021": Number,
                "2020": Number,
                "2019": Number,
            },
            "amtW": {
                "2021": String,
                "2020": String,
                "2019": String,
            }
        },
        "maintenance": {
            "amtR": {
                "2021": Number,
                "2020": Number,
                "2019": Number,
            },
            "amtW": {
                "2021": String,
                "2020": String,
                "2019": String,
            }
        },
        "seminarConferWorkshops": {
            "amtR": {
                "2021": Number,
                "2020": Number,
                "2019": Number,
            },
            "amtW": {
                "2021": String,
                "2020": String,
                "2019": String,
            }
        },


    }


});

const financeModel = mongoose.model('finance', financeSchema);

module.exports = financeModel;