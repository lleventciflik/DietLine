const Nutritionist = require('./models/nutritionist');
const Patient = require('./models/patient');
const {patientDatabase, nutritionistDatabase} = require('./database');

const nutritionist1 = new Nutritionist('Eda', 'Demir', 'Female', '+(90)555-555-55-55', 'edademir@gmail.com', 'lafoay3DHMBCG');
const patient1 = new Patient('Ceyhun', 'Arslan', 'Male', '+(90)555-555-55-55', 'ceyhunarslan@gmail.com', 'asfsdgsgsdfg');
const patient2 = new Patient('Esra', 'Yılmaz', 'Female', '+(90)555-555-55-55', 'esrayilmaz@gmail.com', 'utyjghjgfh');

patient1.makeAppointment(nutritionist1, '12 Eylül 2021');

(async () => {
    console.log('App started');

    await patientDatabase.save([patient1, patient2]);
    
    console.log('Patients Added');

    await nutritionistDatabase.save([nutritionist1]);

    console.log('Nutrition Added');

    const patients = await patientDatabase.load();

    console.log("Patiens Count -> ", patients.length);

    await patientDatabase.remove(0);

    const patients1 = await patientDatabase.load();

    console.log("Patiens Count -> ", patients1.length);
})({});