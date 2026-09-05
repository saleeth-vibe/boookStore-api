const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://nodeapi:UfUE30MsP8UnwjQD@ac-qyphngg-shard-00-00.dtfvelk.mongodb.net:27017,ac-qyphngg-shard-00-01.dtfvelk.mongodb.net:27017,ac-qyphngg-shard-00-02.dtfvelk.mongodb.net:27017/?ssl=true&replicaSet=atlas-zvzswm-shard-0&authSource=admin&appName=nodeapi-cluster');

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;

//UfUE30MsP8UnwjQD









// mongodb://nodeapi:6yJzUTjiF4ANBMbj@ac-rpi6dej-shard-00-00.tvb0haw.mongodb.net:27017,ac-rpi6dej-shard-00-01.tvb0haw.mongodb.net:27017,ac-rpi6dej-shard-00-02.tvb0haw.mongodb.net:27017/mydb?ssl=true&replicaSet=atlas-pyl4qs-shard-0&authSource=admin&appName=nodeapi