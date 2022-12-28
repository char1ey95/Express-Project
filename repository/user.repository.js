const pool = require('./db')

exports.insertOne = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
        const sql = `INSERT INTO user(user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile) VALUES('${user_id}','${user_pw}','${user_name}','${nickname}','${birth}','${gender}','${telephone}','${mobile}')`
        await pool.query(sql)
        // console.log(result)
        const id = user_id
        return id
}

// this.insertOne(1234, 5555, , wwww, 19950313, 남자, 01048184, 0104848484)

exports.joinOne = async (user_id) => {
        const sql = `SELECT * FROM user WHERE user_id = '${user_id}';`
        const [[result]] = await pool.query(sql)
        // console.log('===========repository')
        // console.log(result)
        return result
}

// this.joinOne('web7722')
