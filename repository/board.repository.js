const pool = require('./db')

// list
exports.findAll = async() => {
    const sql = `SELECT * FROM board;`
    const [result] = await pool.query(sql)

    return result
}

// view
exports.findOne = async(idx) => {
    // console.log(idx)
    const sql = `SELECT * FROM board WHERE idx = ${idx};`
    // console.log(sql)
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

exports.update = async(content, idx) => {
    const sql = `UPDATE board SET content='${content}' WHERE idx=${idx};`
    await pool.query(sql)
    return
}

exports.delete = async(idx)=> {
    const sql = `DELETE FROM board WHERE idx=${idx};`
    await pool.query(sql)
}

exports.hitUp = async (idx) => {

    // findOne 실행, findOne 또한 async 함수이므로 값에 접근하기 위해서 await 사용
    const [result] = await this.findOne(idx)

    // result는 현재 객체 : { }
    // result안의 hit의 현재 값을 변수에 담는다
    let hitUp = result.hit

    // 현재 hit의 값에 1을 더한다
    hitUp = hitUp + 1

    // 더한 1의 값과 해당 아이디의 idx를 SQL문법으로 만든다.
    const sql = `UPDATE board SET hit=${hitUp} WHERE idx=${idx};`

    // 만든 SQL 문법을 통해 값의 수정을 수행한다.
    await pool.query(sql)
}




