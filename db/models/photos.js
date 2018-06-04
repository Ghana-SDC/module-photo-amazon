const { db } = require('../config');
const Sequelize = require('sequelize');

const Image = db.define('image', {
  product_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
  timestamps: false
  })
const Picture = db.define('picture', {
  url: {
    type: Sequelize.TEXT,
    allowNull: false
  },
},
{
  timestamps: false
  })

Picture.belongsTo(Image);

db.sync({force:false})
  .then(() => console.log('tables created successfully'))
  .catch((err) => console.log('error creating tables', err))

module.exports = {
  Picture:Picture,
  Image:Image,
}