 // connection stablisment krna beetween your server and data base...
// import  mongoose...
const mongoose = require("mongoose");

// ye process object ke andar saraa data present hai env wla
require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewurlParser:true,
        useUnifiedTopology:true
    })  // promise return krta hai ....
    .then(() => console.log("Db ka connection successful"))
    .catch((error) => {
    console.log("issue in db connection")
    console.error(error.message);
    process.exit(1);
})
}
// isko export krwa diya 
module.exports = dbconnect;
