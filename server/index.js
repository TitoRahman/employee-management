const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());
const PORT = 3001
const uri = process.env.ATLAS_URI
mongoose.connect(
    uri, {
        useNewUrlParser: true
    }
);
mongoose.connection.once('open', () => {
    console.log('Connected to DB')
})

const employee = require('./routes/employee');
app.use('/api', employee)
app.listen(PORT, () => console.log('Listening on port 3001'));