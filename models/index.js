const User = require('./User');
const Item = require('./Item');
const Rent = require('./Rent');
const Rating = require('./Rating');
const Comment = require('./Coment');

User.hasMany(Item, { foreignKey: 'ownerId' });
Item.belongsTo(User, { foreignKey: 'ownerId' });

User.hasMany(Rent, { foreignKey: 'renterId' });
Rent.belongsTo(User, { foreignKey: 'renterId' });

Item.hasMany(Rent, { foreignKey: 'itemId' });
Rent.belongsTo(Item, { foreignKey: 'itemId' });

User.hasMany(Rating, { foreignKey: 'userId' });
Rating.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });


module.exports = {User, Item, Rent, Rating, Comment}