const express = require('express');
const router = express.Router();
const Company = require('../models/companymodel');
const User = require('../models/usermodel');
const Employee = require('../models/employee');
const Client = require('../models/client');


//create user
const addUser = (async (req, res) => {
  console.log("controller")
  
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      dob: req.body.dob,
      
    });
    const addNewUser = await newUser.save()
    console.log("user", addNewUser);
    res.status(201).json(addNewUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });

  }
})


// getuser
const getUser = (async (req, res) => {
  try {
    // Fetch user information and populate the company field with company info
    const userId = req.params.user_id;
    const user = await User.findById(userId).populate('company');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ userInfo, companyInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
//get all
const getAllUser= (async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})


module.exports = { addUser,getUser,getAllUser }

// Create a new company
// const addCompany = (async (req, res) => {
//   try {
//     const { company_name, website, address, description, location, gst_no } = req.body;
//     const owner_id = req.params.user_id; // Assuming user ID is available in the request user object
//     if (!owner_id ) {
//       console.log('User ID is missing or falsy');
//       return res.status(400).json({ error: 'User ID is required to create a company' });
//     }

//     // Check if the user with the provided owner_id exists
//     const owner = await User.findById(owner_id);
//     if (!owner) {
//       return res.status(404).json({ message: 'Owner not found' });
//    }


