const express = require("express");
const router = express.Router();
const { addUser,getUser,getAllUser } = require('../controller/usercontroller')

// router.post('/user/create',addUser);    //create user        
// router.post('/company/createcompany/:user_id', addCompany); //create company with user id
// router.get('/user/getuser/:user_id',getUserInfo);    //get user with associated compnay
// router.get('/user/getcompany/:company_id',getcompany); //get company

router.post('/add',addUser);
router.get('/getUser/:user_id',getUser);
router.get('/getAll',getAllUser);


                                                       
module.exports = router;
  