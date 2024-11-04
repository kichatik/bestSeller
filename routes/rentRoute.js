const Rent = require('../controllers/rentController'); 

module.exports = function(app){
    app.post('/rentals', Rent.create);
    app.get('/rentals', Rent.findAll);
    app.get('/rentals/:id', Rent.findById);
}

