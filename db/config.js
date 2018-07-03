const MongoClient = require('mongodb').MongoClient;
let db;
const uri = 'mongodb://192.168.99.100:27017/photos';


MongoClient.connect(uri, { poolSize: 10 }, (err, client) => {
  if (err) console.error('db failed to connect ', err);
  db = client.db('photos')
  console.log('connected to db')
})

const getdb = () => {
  return db
}

module.exports = {
  getdb
}