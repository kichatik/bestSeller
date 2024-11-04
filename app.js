const express = require("express");
require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('./routes/userRoute.js')(app); 
require('./routes/rentRoute.js')(app);
require('./routes/itemRoute.js')(app);
require('./routes/comentRoute.js')(app); 
require('./routes/ratingRoute.js')(app); 
require('./routes/authRoute.js')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
