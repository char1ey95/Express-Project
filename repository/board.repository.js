const pool = require('./db')

exports.findAll = async() => {
    const sql = `SELECT * FROM board;`
    const [result] = await pool.query(sql)
    
    return result
}

this.findAll()

exports.findOne = async()=> {
    const sql = `SELECT * FROM  where in`
}