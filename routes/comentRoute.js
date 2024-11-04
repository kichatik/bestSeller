const commentController = require('../controllers/comentController'); 

module.exports = function(app){
    app.post('/comments', commentController.create); 
    app.get('/comments/:id', commentController.findById); 
    app.get('/comments', commentController.findAll); 
};
