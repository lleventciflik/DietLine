const mongoose = require('mongoose');

const AppoinmentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        autopopulate: { maxDepth: 2 }
    },
    nutritionist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nutritionist',
        autopopulate: { maxDepth: 2 }
    },
    date: String
});

AppoinmentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model('Appointment', AppoinmentSchema);