class UserRepository {
    constructor({ pool }) {
        this.pool = pool
    }

    insertOne = async ({ userid, userpw, username, nickname, birth, gender, telephone, mobile }) => {
        try {
            const sql = `INSERT INTO user(userid, userpw, username, nickname, birth, gender, telephone, mobile) VALUES('${userid}','${userpw}','${username}','${nickname}','${birth}','${gender}','${telephone}','${mobile}')`
            await this.pool.query(sql)
            const id = userid
            return id
        } catch (e) {
            console.log(e)
        }
    }

    joinOne = async (userid) => {
        try {
            const sql = `SELECT * FROM user WHERE user_id = '${userid}';`
            const [[result]] = await this.pool.query(sql)
            return result
        } catch (e) {
            console.log(e)
        }
    }

    findOne = async (user) => {
        try {
            const payload = Object.entries(user)
            .map(([key, value]) => `${key}='${value}'`)
            .join(' and ')
            const sql = `SELECT * FROM user WHERE ${payload};`
            const [[result]] = await this.pool.query(sql)
            return result
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = UserRepository