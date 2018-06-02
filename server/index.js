const express = require('express');
const parser = require('body-parser');
const path = require('path');
const { Router } = require('./router')
require('../db/models/photos');

const app = express();

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/api', Router)

const port = 1337;

app.listen(port, () => {
  console.log('server connected')
})

