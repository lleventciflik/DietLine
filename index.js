const doctor = require('./models/doctor');
const patient = require('./models/patient');
const patientDatabase= require('./database/patientDatabase');

const doctor1 = new doctor('Eda', 'Demir', 'Female', '+(90)555-555-55-55', 'edademir@gmail.com', 'lafoay3DHMBCG');
const patient1 = new patient('Ceyhun', 'Arslan', 'Male', '+(90)555-555-55-55', 'ceyhunarslan@gmail.com', 'asfsdgsgsdfg');
const patient2 = new patient('Esra');


patientDatabase.save(patient2);


const user = patientDatabase.findByName('Esra');


console.log(user)