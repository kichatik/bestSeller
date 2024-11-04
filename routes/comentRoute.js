const comentController = require('../controllers/comentController'); 

module.exports = function(app){
    app.post('/comments', comentController.create); 
    app.get('/comments/:id', comentController.findById); 
    app.get('/comments', comentController.findAll); 
};
