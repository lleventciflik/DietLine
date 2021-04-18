const router = require('express').Router();
const nutritionistDatabase = require('../database/nutritionist-database');

router.get('/', async (req, res) => {
    const nutrionists = await nutritionistDatabase.load();

    res.render('nutritionists', {
        nutrionists
    });
});

module.exports = router;