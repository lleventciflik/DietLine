const router = require('express').Router();
const {
    patientService
} = require('../services');

router.get('/', async (req, res) => {
    const patients = await patientService.load();

    res.render('patients', {
        patients
    });
});

router.post('/', (req, res) => {
    const patient = patientService.insert(req.body);

    res.send(patient);
});

router.patch('/:patientId', async (req, res) => {
    const { name } = req.body;

    await patientService.update(req.params.patientId, { name });
});

router.delete('/:id', async (req, res) => {
    await patientService.removeById(req.params.id);

    res.send('Remove User');
});

router.post('/:patientId/appointments', async (req, res) => {
    const { patientId } = req.params;
    const { nutritionistId, date } = req.query;

    const appointment = patientService.appointment(patientId, nutritionistId, date);

    res.send(appointment);
});

router.get('/:id', async (req, res) => {
    const patient = await patientService.findById(req.params.id);

    res.render('patient', {
        patient
    });
});

module.exports = router;