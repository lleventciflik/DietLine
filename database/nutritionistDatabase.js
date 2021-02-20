const nutritionist = require("../models/nutritionist");
const baseDatabase = require("./baseDatabase");

class NutritionistDatabase extends baseDatabase {

}

module.exports = new NutritionistDatabase(nutritionist);