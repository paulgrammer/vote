var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var campaignRouter = require('./routes/CampaignRoutes');
var usersRouter = require('./routes/UserRoutes');

var app = express();

// enable cors
var corsOptions = {
    exposedHeaders: ["X-Access-Token"],
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions)); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/campaigns', campaignRouter);
app.use('/users', usersRouter);

module.exports = app;
