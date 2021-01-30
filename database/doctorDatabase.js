const doctor = require("../models/doctor");
const baseDatabase = require("./baseDatabase");

class doctorDatabase extends baseDatabase {

}

module.exports = new doctorDatabase(doctor);