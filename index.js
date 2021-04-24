const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

const PatientsRouter = require('./routes/patients');
const IndexRouter = require('./routes/index');
const NutritionistRouter = require('./routes/nutritionists');
const AppointmentsRouter = require('./routes/appointments');

require('./mongo-connection');

app.set('view engine', 'pug');

app.use(bodyParser.json());

app.use('/', IndexRouter);
app.use('/patients', PatientsRouter);
app.use('/nutritionists', NutritionistRouter);
app.use('/appointments', AppointmentsRouter);

app.listen(3000, () => {
    console.log('Starting and Listining');
});