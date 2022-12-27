const repository = require('../repository/user.repository')

exports.getUser = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
    console.log(mobile)
    const user = await repository.insertOne({ user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile })
    return user
}

