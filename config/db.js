const mongose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const db = async () => {
    try {
        const conn = await mongose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`${conn.connection.host}`)
        console.log("Datanase connected...!");
    } catch (error) {
        console.log(`error ${error}`);
    }

}

module.exports = db;