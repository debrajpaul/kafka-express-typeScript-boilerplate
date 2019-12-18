import swaggerJsdoc from "swagger-jsdoc";

var options = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            title: "Producer Service", // Title (required)
            version: "1.0.0", // Version (required)
            description: "",
            contact: {
                name: "",
                url: ""
            }
        }
    },
    apis: ["./src/routes/*.ts"] // Path to the API docs
};

// Initialize swagger-jsdoc ->  validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
