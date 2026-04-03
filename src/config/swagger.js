const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Backend API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000/api"
      }
    ]
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJSDoc(options);