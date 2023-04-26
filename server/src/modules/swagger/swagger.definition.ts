import config from "../../config/config";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Shortly REST API Documentation",
        version: "0.0.1",
        description: "This is a node express mongoose REST API for p-nerd's Shortly SaaS application",
        license: {
            name: "MIT",
            url: "https://github.com/p-nerd/shortly/tree/main/server",
        },
    },
    servers: [
        {
            url: `http://localhost:${config.port}/v1`,
            description: "Development Server",
        },
    ],
};

export default swaggerDefinition;
