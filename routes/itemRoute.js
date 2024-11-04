const itemController = require('../controllers/itemController');

module.exports = function(app){
    app.post('/items', itemController.createItem);
    app.get('/items', itemController.getAllItems);
    app.get('/items/:id', itemController.getItemById);
}
