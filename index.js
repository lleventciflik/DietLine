const nutritionist = require('./models/Nutritionist');
const patient = require('./models/patient');
const {patientDatabase, nutritionistDatabase} = require('./database');

const nutritionist1 = new nutritionist('Eda', 'Demir', 'Female', '+(90)555-555-55-55', 'edademir@gmail.com', 'lafoay3DHMBCG');
const patient1 = new patient('Ceyhun', 'Arslan', 'Male', '+(90)555-555-55-55', 'ceyhunarslan@gmail.com', 'asfsdgsgsdfg');
const patient2 = new patient('Esra', 'Yılmaz', 'Female', '+(90)555-555-55-55', 'esrayilmaz@gmail.com', 'utyjghjgfh');

patient1.goVerifiedAccount(nutritionist1);

patient1.makeAppointment(nutritionist1, '12 Eylül 2021');

patientDatabase.save([patient1]);

nutritionistDatabase.save([nutritionist1]);

console.log(nutritionistDatabase.load());
