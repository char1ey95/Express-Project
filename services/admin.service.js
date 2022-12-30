const repository = require('../repository/admin.repository')

exports.serviceUserList = async () => {
    const [result] = await repository.findAll()
    return result
}

exports.serviceLogin = async ({user_id, user_pw}) => {
    const user = await repository.findOne({ user_id, user_pw })
    return user
}

exports.serviceUserProfile = async (user_id) => {
const [user] = await repository.findProfile(user_id)
console.log(user)
return user
}