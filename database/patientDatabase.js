const baseDatabase = require("./baseDatabase");
const patient = require('../models/patient')

class patientDatabase extends baseDatabase {
 findByName (name) {
     const objects =  this.load();

     return objects.find(o => o.name === name);
 };
}

module.exports = new patientDatabase(patient);