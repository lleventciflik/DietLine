const appointment = require('./appointment');
const User = require('./user');

class Patient extends User {
    constructor (name,surname, gender, phone, email, password) {
        super(name,surname, gender, phone, email, password);

        this.appointments = [];
    }

    makeAppointment(doctor, date) {
        const _appointment = new appointment(doctor, this, date);

        this.appointments.push(_appointment);

        return _appointment;
    }

    static create({name, surname, gender, phone, email, password}) {
        return new Patient(name, surname, gender, phone, email, password);
    }
}

module.exports = Patient;