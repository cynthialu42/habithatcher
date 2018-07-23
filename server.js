const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static assets
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

// Let Express use routes
app.use(routes);

mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/habithatcher");

// Start the API server
app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
});