var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Api router
const usersApiRouter = require('./routes/api/user_api');
const postApiRouter = require('./routes/api/post_api');
const commentApiRouter = require('./routes/api/comment_api');
const savedPostApiRouter = require('./routes/api/saved_post_api');

// Web router

const { connectDatabaseFunction } = require('./config/MySQL_config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// API
app.use('/usersApi', usersApiRouter);
app.use('/postApi', postApiRouter);
app.use('/commentApi', commentApiRouter);
app.use('/savedPostApi', savedPostApiRouter);

// Web

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

connectDatabaseFunction();

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
