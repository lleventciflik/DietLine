const doctor = require('./doctor');
const patient = require('./patient');

const doctor1 = new doctor('Eda', 'Demir', 'Female', '+(90)555-555-55-55', 'edademir@gmail.com', 'lafoay3DHMBCG');
const patient1 = new patient('Ceyhun', 'Arslan', 'Male', '+(90)555-555-55-55', 'ceyhunarslan@gmail.com', 'asfsdgsgsdfg');

doctor1.addPoliclinic('Eda Demir Poliklinik', 'Izmir/Alsancak', '234247681');

doctor1.addPatientBloodAnalys(patient1, '0.1', '%12');

console.log(doctor1);
console.log(patient1);

console.log(patient1.makeAppointment(doctor1, '12 Şubat'));

console.log(doctor1.addDietPlan(patient1, '28 Ocak', '7 Şubat'));