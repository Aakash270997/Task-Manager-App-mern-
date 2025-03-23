const mongoose = require('mongoose');

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connect to database");
    } catch (error) {
        console.log(error)
        console.log("Not Connect");
    }
}

connectdb();