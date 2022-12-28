const pool = require('./db')

exports.insertOne = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
        const sql = `INSERT INTO user(user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile) VALUES('${user_id}','${user_pw}','${user_name}','${nickname}','${birth}','${gender}','${telephone}','${mobile}')`
        const [result] = await pool.query(sql)
        return result
}

exports.joinOne = (obj) => {
        try {
                console.log(obj)
        } catch (e) {

        }
}

const obj = { User: {user_id: 'web7722', user_pw: '4567'}}
this.joinOne(obj)