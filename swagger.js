const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = [
    "./routes/authRoute.js",
    "./routes/comentRoute.js",
    "./routes/itemRoute.js",
    "./routes/ratingRoute.js",
    "./routes/rentRoute.js",
    "./routes/userRoute.js"
];

const config = {
    info: {
        title: 'Blog API Documentation',
        description: '',
    },
    tags: [ ],
    host: 'localhost:3000',
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config).then(() => {
    require('./app.js'); 
});