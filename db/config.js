const Sequelize = require('sequelize');

const db = new Sequelize('photos', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.authenticate()
  .then(() => console.log('database connected'))
  .catch((err) => console.log('database failed to connect', err))

module.exports = {db:db}