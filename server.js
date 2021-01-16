const { db } = require('./Develop/db/db.json');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { create } = require('domain');
const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));



// get request for notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
})


// get request for index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// get request for * 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });


// make server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
