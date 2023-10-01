const mongoose = require('mongoose');
const dotenv = require("dotenv");

var mongodb = require('mongodb').MongoClient;
var data = new Array();
mongodb.connect(process.env.DB).then((c)=>{
    console.log("Connected")
    findListings(c)
})

async function findListings(client) {
    const cursor = client
      .db('webd')
      .collection('webData')
      .find()
  
    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found ${results.length}`);
      results.forEach((result, i) => {
        data[i] = result
      });
    }
  }

dotenv.config({path:"./config.env"});
module.exports = data; 


