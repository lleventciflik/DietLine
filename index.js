const express = require('express');
const PatientsRouter = require('./routes/patients');
const IndexRouter = require('./routes/index');
const NutritionistRouter = require('./routes/nutritionist');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.use(bodyParser.json());   
app.use('/patients', PatientsRouter);
app.use('/', IndexRouter);
app.use('/nutritionists', NutritionistRouter)

app.listen(3000, () => {
    console.log('Starting and Listining');
});