'use strict'

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = process.env.PORT


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());
app.use(cors()); 
app.use(morgan())



exports.initServer = ()=>{
    app.listen(port)
}
