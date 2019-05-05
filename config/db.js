const mongoose = require('mongoose');
const config = require('config'); //to bring in the default.json value
const db = config.get('mongoURI');//grab the mongoURI value from default.json

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true, //to remove deprecation warning
      useCreateIndex: true
    }); //await waits for the promise of the connect to happen

    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);// if the connection fails, exit the process with a failure
  }
}

module.exports = connectDB; //export the connectDB method