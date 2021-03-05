const Appointment = require('./appointment');

class Patient {
    constructor(name, surname, gender, phone, email, password) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.doctor = null;
        this.appointments = [];
    }

    makeAppointment(doctor, date) {
        return new Appointment(doctor, this, date);;
    }

    static create({name,surname,gender,phone,email,password}) {
        return new Patient(name, surname, gender, phone, email, password);
    }
}

module.exports = Patient;