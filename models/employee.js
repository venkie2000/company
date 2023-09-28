const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employee_name: String,
    emp_id:String,
    address: String,
    description: String,
    location: String,
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    
})
const Employee = mongoose.model('Employee',employeeSchema);

module.exports = Employee;
