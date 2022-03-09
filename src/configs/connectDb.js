const mongoose = require('mongoose');

//Function connection database
const db = () => {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://admin4:kingspear1999@cluster0.trnqb.mongodb.net/CMS?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    if(!err){
      console.log('connect success')
    }
    const collection = client.db("test").collection("devices");
    client.close();
  });
};

module.exports = db