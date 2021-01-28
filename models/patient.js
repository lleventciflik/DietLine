const appointment = require('./appointment');

class patient {
    constructor (name) {
        this.name = name;
        this.appointments = [];
    }

    makeAppointment(doctor, date) {
        const _appointment = new appointment(doctor, this, date);

        this.appointments.push(_appointment);

        return this.appointments;
    }
}

module.exports = patient;