const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

// Connect to [MongoDB Atlas](https://www.google.com/search?q=MongoDB%20Atlas) database - Replace <YOUR_MONGODB_CONNECTION_STRING> with your actual connection string
mongoose.connect('mongodb+srv://rubbendebrah1:Darlingboy123@todolist.tronkh7.mongodb.net/appointment4', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to [MongoDB](https://www.google.com/search?q=MongoDB)');
    // Add your custom message or logic here
  })
  .catch((error) => {
    console.error('Failed to connect to [MongoDB](https://www.google.com/search?q=MongoDB)', error);
  });

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  message: String,
});

// Define a model for the form data
const FormData = mongoose.model('FormData', formDataSchema);

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, phone, date, message } = req.body;

  // Create a new FormData instance with the submitted data
  const formData = new FormData({
    name,
    email,
    phone,
    date,
    message,
  });

  // Save the form data to the database
  formData.save()
    .then(() => {
      res.status(200).json({ message: 'Form submitted successfully!' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while saving the form data.' });
    });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});