const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/testroo');
mongoose.connection.once('open', function(){
    console.log('connection has been made');
}).on('error', function(error){
    console.log(error);
});