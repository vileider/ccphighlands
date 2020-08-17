var fs = require('fs'); //wcytywanie pliku
const express = require('express');
const path = require('path');
const { request } = require('http');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: '1mb'}));

//wczytywanie modułu do pobierania/ wysylania
//app.use('/api', require('./app_modules/sending_test')); 




app.listen(3533);
