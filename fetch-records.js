const Nutritionist = require('./models/nutritionist');
const Patient = require('./models/patient');
const {patientService, nutritionistService} = require('./services');

const nutritionist1 = new Nutritionist(undefined, 'Eda', 'Demir', 'Female', '+(90)555-555-55-55', 'edademir@gmail.com', 'lafoay3DHMBCG');
const patient1 = new Patient(undefined, 'Ceyhun', 'Arslan', 'Male', '+(90)555-555-55-55', 'ceyhunarslan@gmail.com', 'asfsdgsgsdfg', []);
const patient2 = new Patient(undefined, 'Esra', 'Yılmaz', 'Female', '+(90)555-555-55-55', 'esrayilmaz@gmail.com', 'utyjghjgfh', []);

patient1.makeAppointment(nutritionist1, '29 Mayıs');

nutritionist1.addPoliclinic('Eda Demir Policlinic', 'İzmir', '12435123');

// const dietPlan1 = nutritionist1.addDietPlan(patient1, 4, '1 Ekim', '7 Ekim');

// const step1 = dietPlan1.addDailyPlan('1 Ekim');

// const step2 = step1.addMeal('Sabah Öğünü');

// const step3 = step2.addFood('Brokoli yemeği', '1 porsiyon');

(async () => {
    console.log('App started');

    console.log(patient1);

    await patientService.save([patient1, patient2]);

    await nutritionistService.save([nutritionist1]);

    const patients = await patientService.load();

    console.log("Patiens ", patients);
})({});