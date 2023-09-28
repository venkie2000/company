const express = require("express");
const router = express.Router();
const { addEmployee,getEmployee,getAllEmployee,updatedEmployee,deletedEmployee} = require('../controller/employeecontoller')


router.post('/add/:company_id',addEmployee);
router.get('/getEmployee/:emp_id',getEmployee);
router.get('/getAll',getAllEmployee);
router.put('/update/:emp_id',updatedEmployee);
router.delete('/delete/:emp_id',deletedEmployee);

router.get('/employeeInfo', async (req, res) => {
    try {
        const { companyid, employeeid } = req.query;
        const getCompanyEmp = await Company.findOne({ _id: companyid, employee: employeeid }).populate('employee');
        if (getCompanyEmp) {
           return res.status(201).json(getCompanyEmp)
        }
       res.status(200).json({ message: 'getcompanyemp not found'});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
})



module.exports = router;
