const express = require('express');
const router = express.Router();
const Company = require('../models/companymodel');
const User = require('../models/usermodel');
const Employee = require('../models/employee');
const Client = require('../models/client');

//add company
const addCompany = (async (req, res) => {
  try {
    const newCompany = new Company({
      company_name: req.body.company_name,
      website: req.body.website,
      address: req.body.address,
      description: req.body.description,
      location: req.body.location,
      gst_no: req.body.gst_no,
      client: req.body.client,
      employee: req.body.employee,
    });
    const createdcompany = await newCompany.save();
    res.status(201).json(createdcompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });

  }
});

//getcompany

const getCompany = (async (req, res) => {
  try {
    const companyId = req.params.company_id;
    console.log("companyId", companyId);
    const company = await Company.findById(companyId).populate('client').populate('employee');

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    // console.log("-----",data)
    res.status(200).json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//get all 
const getAllCompany = (async (req, res) => {
  try {
    const company = await Company.find();
    res.status(200).json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

//getcompanyclient
const getCompanyClient = (async (req, res) => {
  try {
    const companyId = req.params.company_id;
    console.log("companyId", companyId);
    const companyclient = await Company.findById(companyId).populate('client');

    if (!companyclient) {
      return res.status(404).json({ message: 'Companyclient not found' });
    }

    res.status(200).json(companyclient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//getcompanyemployee

const getCompanyEmployee = (async (req, res) => {
  try {
    const companyId = req.params.company_id;
    console.log("companyId", companyId);
    const companyemployee = await Company.findById(companyId).populate('employee');


    if (!companyemployee) {
      return res.status(404).json({ message: 'Companyemployee not found' });
    }

    res.status(200).json(companyemployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = { addCompany, getCompany, getAllCompany, getCompanyClient, getCompanyEmployee}
