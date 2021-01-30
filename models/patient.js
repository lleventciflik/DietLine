const appointment = require('./appointment');
const user = require('./user');

class patient {
    constructor (name) {
        this.name = name;
        // this.surname = surname;
        // this.gender = gender;
        // this.phone = phone;
        // this.email = email;
        // this.password = password;
        // this.appointments = [];
    }

    // makeAppointment(doctor, date) {
    //     const _appointment = new appointment(doctor, this, date);

    //     this.appointments.push(_appointment);

    //     return _appointment;
    // }

    static create({name}) {
        return new patient(name);
    }
}

module.exports = patient;