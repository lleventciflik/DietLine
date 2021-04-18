const Patient = require('../models/patient');
const {
    patientDatabase,
    nutritionistDatabase
} = require('../database');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const patients = await patientDatabase.load();

    res.render('patients', {
        patients
    });
});

router.post('/' ,async (req, res) => {
    const patient = Patient.create(req.body);

    await patientDatabase.insert(patient);

    res.send(patient);
});

router.post('/:patientId/appointments', async (req,res) => {
    const {patientId} = req.params;
    const {nutrionistId} = req.query;
    
    const patient = await patientDatabase.findById(patientId);
    const nutrionist = await nutritionistDatabase.findById(nutrionistId);

    patient.makeAppointment(nutrionist, patient, '15 Ekim');

    await patientDatabase.update(patient);

    res.send('Okey');
}); 

router.delete('/:id',async(req, res) => {
    await patientDatabase.removeById(req.params.id);

    res.send('Remove User');
});

router.get('/:id', async (req, res) => {
    const patient = await patientDatabase.findById(req.params.id);

    if (!patient) return res.send('Cannot find patient').status(404);

    res.render('patient', {
        patient
    });
});

module.exports = router;