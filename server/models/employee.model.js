const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
