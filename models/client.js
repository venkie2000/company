const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    client_name : String,
    client_id : String,
    location : String,
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },

});

const Client = mongoose.model('Client',clientSchema);

module.exports = Client;
