const express = require('express');
const router = express.Router();
const Company = require('../models/companymodel');
const User = require('../models/usermodel');
const Employee = require('../models/employee');
const Client = require('../models/client');

const addEmployee = (async (req, res) => {
    console.log("controller")
    const empId = req.params.emp_id;
    
    try {
      const newEmployee = new Employee({
        employee_name: req.body.employee_name,
        emp_id: req.body.emp_id,
        address: req.body.address,
        description: req.body.description,
        location: req.body.location,
        company: empId,

      });
      const addNewEmployee = await newEmployee.save()
      console.log("user", addNewEmployee);
      res.status(201).json(addNewEmployee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  
    }
  })

  //get employee
  const getEmployee = (async (req, res) => {
    try {
      const employeeId = req.params.emp_id;
      console.log("employeeId",employeeId)
      const employee = await Employee.findById(employeeId);
      if (!employee) {
        return res.status(404).json({ message: 'employee not found' });
      }
  
      res.status(200).json(employee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  //get all 
  const getAllEmployee= (async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})
  
  // updating an employee

const updatedEmployee = (async (req, res) => {
    try {
      const employee_Id = req.params.emp_id;
      console.log("employeeId",employee_Id);
      
      const updates = req.body;
  
      const updatedEmployee = await Employee.findByIdAndUpdate(employee_Id, updates, { new: true });
  
      if (!updatedEmployee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      res.status(200).json(updatedEmployee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })
  
  //  deleting an employee
  
  const deletedEmployee = (async (req, res) => {
    try {
      const employee_Id = req.params.emp_id;
      console.log("employeeId",employee_Id);
  
      const deletedEmployee = await Employee.findByIdAndRemove(employee_Id);
  
      if (!deletedEmployee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      res.status(201).json(deletedEmployee._doc); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })

  module.exports = { addEmployee,getEmployee,getAllEmployee,updatedEmployee,deletedEmployee }
  