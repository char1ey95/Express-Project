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

// write
exports.insert = async(subject, user_id, content) => {
    const sql = `INSERT INTO board(subject,user_id,content) VALUES('${subject}','${user_id}','${content}');`

    await pool.query(sql)
    return
}