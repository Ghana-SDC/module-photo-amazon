const Router = require('express').Router();
const { pictureController } = require('../controllers/pictureController')

Router.route('/pictures/name/:name')
  .get(pictureController.getName)

Router.route('/pictures/:id')
  .get(pictureController.getId)





module.exports = {
  Router:Router
}