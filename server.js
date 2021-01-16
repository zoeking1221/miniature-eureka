const { db } = require('./Develop/db/db.json');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { create } = require('domain');
// const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));





// make server listen
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});
