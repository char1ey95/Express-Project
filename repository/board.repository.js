const pool = require('./db')    

// list
exports.findAll = async() => {
    const sql = `SELECT * FROM board;`
    const [result] = await pool.query(sql)
    
    return result
}


// view
exports.findOne = async(idx)=> {
    // console.log(idx)
    const sql = `SELECT * FROM board WHERE idx = ${idx};`
    const [result] = await pool.query(sql)
    // console.log(result)
    return result
}

// this.findOne()