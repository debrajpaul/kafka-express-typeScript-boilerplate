import cors from "cors";
import http from "http";
import helmet from "helmet";
import morgan from "morgan";
import log from "./utils/logger";
import * as dotenv from "dotenv";
import swaggerSpec from "./swagger-docs";
import swaggerUi from "swagger-ui-express";
import express, { Application } from "express";
import producerRoutes from "./routes/producer-routes";

dotenv.config();
const app: Application = express();
let { PORT, PROTOCOL } = process.env;
if (!PORT) {
    log(
        "app:producer_service:app.js",
        "FATAL ERROR : Port is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!PROTOCOL) {
    log(
        "app:producer_service:app.js",
        "FATAL ERROR : PROTOCOL is not defind! Please check .env setting"
    );
    process.exit(1);
}

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(
    morgan("tiny", {
        stream: { write: msg => log("app:producer_service:req", msg) }
    })
);
app.use("/producer-service", producerRoutes);
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

process.on("uncaughtException", ex => {
    log("Error uncaughtException! Please check the fields attributes", ex);
    process.exit(1);
});
process.on("unhandledRejection", ex => {
    log("Error unhandledRejection! Please check the fields attributes", ex);
    process.exit(1);
});

switch (PROTOCOL) {
    case "http": {
        const httpServer = http.createServer(app);
        httpServer.listen(
            parseInt(`${PORT}`),
            undefined,
            undefined,
            (): void => {
                log(
                    "app:producer_service:API_server",
                    `HTTP listening on port ${PORT}`
                );
            }
        );
        break;
    }
    default: {
        log(
            "app:producer_service(switch-case):app.js",
            "FATAL ERROR : PROTOCOL is not defind! Please check .env setting"
        );
        process.exit(1);
    }
}
