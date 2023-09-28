const express = require("express");
const router = express.Router();
const {addCompany,getCompany,getAllCompany,getCompanyClient,getCompanyEmployee} = require('../controller/companycontroller')

router.post('/add',addCompany);
router.get('/getCompany/:company_id',getCompany);
router.get('/getAll',getAllCompany);

router.get('/getCompanyClient/:company_id',getCompanyClient);
router.get('/getCompanyEmployee/:company_id',getCompanyEmployee);


module.exports = router;