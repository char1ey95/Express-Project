require("dotenv").config()

module.exports = {
    port: process.env.BACK_PORT || 3000,
    host: process.env.BACK_HOST || 'localhost',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'Rkd08217!',
        database: process.env.DB_NAME || 'express_project',
    }
}