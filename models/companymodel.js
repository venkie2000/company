const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  // id: { type: mongoose.Schema.Types.ObjectId },
  company_name: String,
  website: String,
  address: String,
  description: String,
  location: String,
  gst_no: String,
  client: { type: mongoose.Schema.Types.ObjectId,required:true, ref: 'Client' },
  employee: { type: mongoose.Schema.Types.ObjectId,required:true, ref: 'Employee' },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;

