const Appointment = require('./appointment');
const {
    v4: uuidv4
} = require('uuid');

class Patient {
    constructor(id = uuidv4(), name, surname, gender, phone, email, password, appointments = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.appointments = appointments;
    }

    makeAppointment(doctor, date) {
        console.log('Doctor ->' + doctor);
        var appointment = new Appointment(doctor, this, date);

        this.appointments.push(appointment);

        return appointment;
    }

    static create({
        id,
        name,
        surname,
        gender,
        phone,
        email,
        password,
        appointments
    }) {
        return new Patient(id, name, surname, gender, phone, email, password, appointments);
    }
}

module.exports = Patient;