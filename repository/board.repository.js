const pool = require('./db')

// list
exports.findAll = async() => {
    const sql = `SELECT * FROM board;`
    const [result] = await pool.query(sql)

    return result
}

// view
exports.findOne = async(idx) => {
    const sql = `SELECT * FROM board WHERE idx = ${idx};`
    const [result] = await pool.query(sql)

    return result
}

// write
exports.insert = async(subject, user_id, content) => {
    const sql = `INSERT INTO board(subject,user_id,content) VALUES('${subject}','${user_id}','${content}');`

    await pool.query(sql)
    return
}

exports.update = async(content, idx) => {
    const sql = `UPDATE board SET content='${content}' WHERE idx=${idx};`
    await pool.query(sql)
    return
}

exports.delete = async(idx)=> {
    const sql = `DELETE FROM board WHERE idx=${idx};`
    await pool.query(sql)
}

// hit
exports.findHit = async(idx) => {

    `UPDATE board SET content='${content}' WHERE idx=${idx};`
}

exports.hitUp = async (idx) => { // [[{ hit : 1 }]]
    const [[result]] = this.findOne(idx) // { hit:1,,,,  }
    let hitUp = result.hit // { hit:1, content: asfd , user_id : asdgas, ,  }
    hitUp = hitUp + 1 // 2
    const sql = `UPDATE board SET hit='${hitUp}' WHERE idx=${idx};` // 2
    await pool.query(sql)
}