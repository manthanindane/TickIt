// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Seat = require('./models/Seat');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://manthan:manthan1422@cluster0.15kho7o.mongodb.net/users?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Define the route for handling the seat data POST request
app.post('/seats', (req, res) => {
  const { seatNumber, name, email, phone, date, time } = req.body;

  const seatData = new Seat({
    seatNumber,
    name,
    email,
    phone,
    time, // Store the time as a string
    date: new Date(date), // Convert the date to a JavaScript Date object
  });

  seatData.save()
    .then((savedSeat) => {
      console.log('Seat data saved:', savedSeat);
      res.status(200).json({ message: 'Seat data saved successfully' });
    })
    .catch((error) => {
      console.error('Error saving seat data:', error);
      res.status(500).json({ message: 'Error saving seat data' });
    });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

