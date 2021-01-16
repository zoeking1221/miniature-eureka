const notes = require('./db/db.json');
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
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// get request to read db.json file and return all saved notes as json
app.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// post request to:
    // receive new note
    // add to db.json file
    // return new note to client (browser)
    // assign each note unqie ID when saved using npm package
app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
});
    

// get request for index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// get request for * 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });


// make server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
