const router = require('express').Router();
const appointmentService = require('../services/appointment-service');

router.get('/', async (req, res) => {
    const appointments = await appointmentService.load();

    res.render('appointments', {
        appointments
    });
});

router.get('/search', async (req,res) => {
    const date = req.query.date;
    const appointments = await appointmentService.query({date});

    res.render('appointments', { appointments });
});

router.get('/:id', async (req,res) => {
    const appointment = await appointmentService.findById(req.params.id);

    res.render('appointment', {appointment});
});

module.exports = router;