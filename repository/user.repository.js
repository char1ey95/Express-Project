const pool = require('./db')

exports.insertOne = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
        const sql = `INSERT INTO user(user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile) VALUES('${user_id}','${user_pw}','${user_name}','${nickname}','${birth}','${gender}','${telephone}','${mobile}')`
        await pool.query(sql)
        // console.log(result)
        const id = user_id
        return id
}

exports.joinOne = async (user_id) => {
        const sql = `SELECT * FROM user WHERE user_id = '${user_id}';`
        const [[result]] = await pool.query(sql)
        // console.log('===========repository')
        // console.log(result)
        return result
}
// this.joinOne('web7722')

exports.findOne = async (user) => {

        // console.log(user)
        const payload = Object.entries(user)
                .map(([key, value]) => `${key}='${value}'`)
                .join(' and ')
        // console.log(payload)
        // console.log('=============')
        const sql = `SELECT * FROM user WHERE ${payload};`
        // console.log(sql)
        const [[result]] = await pool.query(sql)
        // console.log(result)
        return result
}

// const user = {
//         user_id: 'web7722',
//         user_pw: '1234'
// }

// this.findOne(user)