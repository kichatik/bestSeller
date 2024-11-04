const Rating = require('../controllers/ratingController'); 

module.exports = function(app){
    app.post('/ratings', Rating.createRating);
    app.get('/ratings', Rating.getAllRatings);
    app.get('/ratings/:id', Rating.getRatingById);
}

