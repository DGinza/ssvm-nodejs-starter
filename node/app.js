const { say } = require('../pkg/ssvm_nodejs_starter_lib.js');

const express = require('express');
const app = express();
const path = require('path');
const port = 8080

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post()

app.listen(port, () => console.log(`Listen in http://localhost:${port}`))