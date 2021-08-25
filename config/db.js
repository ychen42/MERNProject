const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//connect to mongodb, this function will be parse to server.js
// use try catch when use async/await
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
        });
            
        console.log('MongoDB connected...');

    } catch(err){
        console.error(err.message);
        //exit
        process.exit(1);
    }
};

module.exports = connectDB;
