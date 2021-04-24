const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/diet_line', {useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connect to MongoDB');
});