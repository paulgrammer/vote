var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var campaignRouter = require('./routes/CampaignRoutes');
var usersRouter = require('./routes/UserRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/campaigns', campaignRouter);
app.use('/users', usersRouter);

module.exports = app;
