const express = require('express');
const crud = require('./crud'); // Import your CRUD functions

const app = express();
const port = 3000;

// Create a user (example):
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = await crud.createUser(name, email);
    res.json({ message: `User created with ID: ${userId}` });
  } catch (error) {
    res.status(50)
  }
})
