class AdminRepository{
    constructor({ pool }){
        this.pool = pool
    }

    findAll = async () => {
        try {
            const sql = `SELECT * FROM user where level != 1;`
            const result = await this.pool.query(sql)
            return result
        } catch (e) {
            next(e)
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
            next(e)
        }
    }
    
    findProfile = async (user_id) => {
        try {
            const user = String(user_id)
            const sql = `select * from user where user_id = '${user}';`
            const [result] = await this.pool.query(sql)
            return result
        } catch (e) {
            next(e)
        }
    }
    
    updateUser = async (user_id, user_author, level) => {
        try {
            const updateAuthor =`UPDATE user SET user_author=${user_author} WHERE user_id='${user_id}';`
            const updatelevel =`UPDATE user SET level=${level} WHERE user_id='${user_id}';`
            await this.pool.query(updateAuthor)
            await this.pool.query(updatelevel)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = AdminRepository