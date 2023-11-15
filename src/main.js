import server from "./server/server.js";
import { config } from "dotenv";
import connect from "./database/configuration.js";

config()
connect()

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running in port ${PORT}`));