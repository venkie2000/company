const express = require('express');
const router = express.Router();
const Company = require('../models/companymodel');
const User = require('../models/usermodel');
const Employee = require('../models/employee');
const Client = require('../models/client');

//add client

const addClient = (async (req, res) => {
    console.log("controller")
    const compId = req.params.company_id;
    
    try {
      const newClient = new Client({
        client_name: req.body.client_name,
        client_id: req.body.client_id,
        location: req.body.location,
        company: compId,
      });
    const createdclient = await newClient.save();
    console.log("createdclient-",createdclient.location)
   res.status(201).json(createdclient);
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error'});
  }
});
  
  //get client

  const getClient = (async (req, res) => {
    try {
      const clientId = req.params.client_id;
      console.log("clientId",clientId)
      const client = await Client.findById(clientId);
  
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }
  
      res.status(200).json(client);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  //get all 

  const getAllClient = (async (req, res) => {
    try {
        const client = await Client.find();
        res.status(200).json(client);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    })
    //update client
    const updatedClient = (async (req, res) => {
      try {
        const client_Id = req.params.client_id;
        console.log("clientId",client_Id);
        
        const updates = req.body;
    
        const updatedClient = await Client.findByIdAndUpdate(client_Id, updates, { new: true });
    
        if (!updatedClient) {
          return res.status(404).json({ error: 'client not found' });
        }
    
        res.status(200).json(updatedClient);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    })
    //delete client
    const deletedClient = (async (req, res) => {
      try {
        const client_Id = req.params.client_id;
        console.log("clientId",client_Id);
    
        const deletedClient = await Client.findByIdAndRemove(client_Id);
    
        if (!deletedClient) {
          return res.status(404).json({ error: 'client not found' });
        }
    
        res.status(201).json(deletedClient._doc); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    })
  
  

  module.exports = { addClient, getClient,getAllClient,updatedClient,deletedClient}
  