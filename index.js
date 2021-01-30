const doctor = require('./models/doctor');
const patient = require('./models/patient');
const {patientDatabase, doctorDatabase} = require('./database');

const doctor1 = new doctor('Eda', 'Demir', 'Female', '+(90)555-555-55-55', 'edademir@gmail.com', 'lafoay3DHMBCG');
const patient1 = new patient('Ceyhun', 'Arslan', 'Male', '+(90)555-555-55-55', 'ceyhunarslan@gmail.com', 'asfsdgsgsdfg');
const patient2 = new patient('Esra', 'Yılmaz', 'Female', '+(90)555-555-55-55', 'esrayilmaz@gmail.com', 'utyjghjgfh');


patientDatabase.save([patient1, patient2]);

const user = patientDatabase.findByName('Esra');

user.makeAppointment('Doctor Who', '11 Şubat')

console.log(user)