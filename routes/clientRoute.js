const express = require("express");
const router = express.Router();
const { addClient, getClient, getAllClient, updatedClient, deletedClient } = require('../controller/clientcontroller');
const Company = require("../models/companymodel");
const ObjectId = require("mongodb");

router.post('/add/:company_id', addClient);
router.get('/getClient/:client_id', getClient);
router.get('/getAll', getAllClient);
router.put('/update/:client_id', updatedClient);
router.delete('/delete/:client_id', deletedClient);


module.exports = router;

 