const express = require('express');
const parser = require('body-parser');
const path = require('path');
const { Router } = require('./router');
const helmet = require('helmet');
const cors = require('cors');
require('../db/models/photos');

const app = express();
app.use(helmet());
app.use(cors());
app.options('*', cors())
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', Router)

const port = 1337;

app.listen(port, () => {
  console.log('server connected')
})

