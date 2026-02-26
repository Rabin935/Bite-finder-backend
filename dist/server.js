"use strict";
require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    await connectDB();
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`Bite Finder Backend running on port ${PORT}`);
    });
};
startServer().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
//# sourceMappingURL=server.js.map