const appointment = require('./appointment');
const user = require('./user');

class patient extends user{
    constructor (name, surname, gender, phone, email, password) {
        super(name, surname, gender, phone, email, password);
        this.appointments = [];
    }

    makeAppointment(doctor, date) {
        const _appointment = new appointment(doctor, this, date);

        this.appointments.push(_appointment);

        return _appointment;
    }
}

module.exports = patient;