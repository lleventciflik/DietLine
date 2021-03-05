const BaseDatabase = require("./base-database");
const Patient = require("../models/patient");

class PatientDatabase extends BaseDatabase {
 findByName (name) {
     const objects =  this.load();

     return objects.find(o => o.name === name);
 };
}

module.exports = new PatientDatabase(Patient);