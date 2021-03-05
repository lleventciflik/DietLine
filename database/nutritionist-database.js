const nutritionist = require("../models/nutritionist");
const BaseDatabase = require("./base-database");
const Nutritionist = require("../models/nutritionist");

class NutritionistDatabase extends BaseDatabase {

}

module.exports = new NutritionistDatabase(Nutritionist);