const repository = require('../repository/user.repository')

exports.serviceUser = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
    const user = await repository.insertOne({ user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile })
    return user
}

exports.serviceWelcome = async (user_id) => {
    const user = await repository.joinOne(user_id)
    // console.log('===========service')
    // console.log(user)
    return user
}
// this.serviceWelcome('web7722')