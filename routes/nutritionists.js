const router = require('express').Router();
const {
    nutritionistService
} = require('../services');

router.get('/', async (req, res) => {
    const nutritionists = await nutritionistService.load();

    res.render('nutritionisties', {
        nutritionists
    });
});

router.post('/', (req, res) => {
    const nutritionists = nutritionistService.insert(req.body);

    res.send(nutritionists);
});

router.patch('/:nutritionistsId', async (req, res) => {
    const { name } = req.body;

    await nutritionistService.update(req.params.nutritionistsId, { name });
});

router.delete('/:id', async (req, res) => {
    await nutritionistService.removeById(req.params.id);

    res.send('Remove User');
});

router.get('/:nutritionistId', async (req, res) => {
    const nutritionist = await nutritionistService.findById(req.params.nutritionistId);

    console.log(nutritionist);

    res.render('nutritionist', {
        nutritionist
    });
});

module.exports = router;