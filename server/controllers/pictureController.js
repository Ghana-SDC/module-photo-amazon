const { Product, Picture, Image } = require('../../db/models/photos.js');

const pictureController = {
  'getId':((req, res) => {
    console.log('HI!')
    Picture.findAll({ include:[{
      model: Image, where: {id: req.params.id
      }}]
    })
      .then(data => {
        res.status(200).send(data)
      })
  }),
  'getName':((req, res) => {
    Picture.findAll({ include:[{
      model: Image, where: {product_name: req.params.name
      }}]
    })
      .then(data => {
        res.status(200).send(data)
      })
  })
}

module.exports = {pictureController:pictureController}
