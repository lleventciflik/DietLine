const appointment = require('./Appointment');

class Patient {
    constructor(name, surname, gender, phone, email, password) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.verify = false;
        this.doctor = null;
        this.appointments = [];
    }

    makeAppointment(doctor, date) {
        return new appointment(doctor, this, date);;
    }

    goVerifiedAccount(doctor) {
        this.doctor = doctor;
        this.verify = true;

        return 'Success Message';
    }

    static create({name,surname,gender,phone,email,password}) {
        return new Patient(name, surname, gender, phone, email, password);
    }
}

module.exports = Patient;