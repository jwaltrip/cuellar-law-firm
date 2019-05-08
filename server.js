require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sslRedirect = require('heroku-ssl-redirect');

const app = express();

// send email route
const emailRoute = require("./routes/email");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// enable ssl redirect
app.use(sslRedirect());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// setup express to serve the static index.html built by react
app.use(express.static(path.join(__dirname, "build")));

// setup routes
app.use("/api", emailRoute);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

// set the backend server port
const port = process.env.PORT || 5000;

// a catchall route if any API calls aren't used, then serve the index.html built by react
// this needs to be after all other routes
// used for when deoployed to Heroku
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Backend server running and listening on port ${port}`);
});

module.exports = app;
