const swaggerJsDoc = require('swagger-jsdoc');

const definition = {
  openapi: '3.0.0',
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  definition,
  apis: ['./openapi/*.yaml'],
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = swaggerDocs;
