const pool = require('./db')

exports.insertOne = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
        console.log(mobile)
        const sql = `INSERT INTO user(user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile) VALUES('${user_id}','${user_pw}','${user_name}','${nickname}','${birth}','${gender}','${telephone}','${mobile}')`
        const [result] = await pool.query(sql)
        return result
    
}


