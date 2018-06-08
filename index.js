const http = require('http');
const express = require('express');

const config = require('./config/config')();

var app = express();

app.listen(config.port, config.host, null, ()=>{ 
    console.log(`server running at: https://${config.host}:${config.port}`); 
});