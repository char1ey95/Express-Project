const repository = require('../repository/admin.repository')

exports.getUserList = async () => {
    const [result] = await repository.findAll()
    return result
}

exports.serviceLogin = async ({user_id, user_pw}) => {
    const user = await repository.findOne({ user_id, user_pw })
    return user
}