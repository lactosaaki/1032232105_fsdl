const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("MongoDB Connected"));

const Student = mongoose.model('Student', {
  firstName: String,
  lastName: String,
  rollNo: String,
  contact: String
});

// CREATE
app.post('/addStudent', async (req, res) => {
  await Student.create(req.body);
  res.send("Added");
});

// READ
app.get('/students', async (req, res) => {
  res.json(await Student.find());
});

// DELETE
app.delete('/delete/:rollNo', async (req, res) => {
  await Student.deleteOne({ rollNo: req.params.rollNo });
  res.send("Deleted");
});

app.listen(5000, () => console.log("Server running"));