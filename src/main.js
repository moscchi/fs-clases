import server from "./server/server.js";

const PORT = 8080;

server.listen(PORT, () => console.log(`Server running in port ${PORT}`));