const mysql = require('mysql2')
const { db: {host, port, user, password, database} } = require("../config")

const pool = mysql.createPool({
    host,
    port:`${port}`,
    user,
    password,
    database,
    connectionLimit: 5,
}).promise()

module.exports = pool