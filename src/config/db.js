const mongoose = require("mongoose");
// require('dotenv').config()
// mongoose.set('strictQuery', true)
// const DB_URL = process.env.URL;
// const Connect =  async() => {
//     try {
//         console.log("Database connected  successfully");
//         return mongoose.connect(DB_URL, { useNewUrlParser: true });
        
//     } catch (err) {
//         console.log("Error while connecting with the Database", err)
//     }

//     // return mongoose.connect(DB_URL)
// }
const Connect =async()=>{
    return mongoose.connect(process.env.DB_URL)
}
module.exports = Connect;

