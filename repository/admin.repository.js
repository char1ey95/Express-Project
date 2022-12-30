const pool = require('./db')

exports.findAll = async () => {
    const sql = `SELECT * FROM user where level != 1;`
    const result = await pool.query(sql)
    return result
}

exports.findOne = async (user) => {
    const payload = Object.entries(user)
            .map(([key, value]) => `${key}='${value}'`)
            .join(' and ')
    const sql = `SELECT * FROM user WHERE ${payload};`
    const [[result]] = await pool.query(sql)
    return result
}