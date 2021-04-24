const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: String,
    surname: String,
    gender: String,
    phone: String,
    email: String,
    passwword: String,
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        autopopulate: { maxDepth: 2 },
    }]
});

PatientSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model('Patient', PatientSchema);