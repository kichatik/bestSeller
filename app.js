const express = require("express");
require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to BestSeller API" });
});

require('./routes/userRoute')(app); 
require('./routes/rentRoute')(app);
require('./routes/itemRoute')(app);
require('./routes/comentRoute')(app); 
require('./routes/ratingRoute')(app); 
require('./routes/authRoute')(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});