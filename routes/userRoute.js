const User = require('../controllers/userController');

module.exports = function(app){
    app.post('/register', User.create);
    app.post('/login', User.login);
} 

