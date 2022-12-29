const repository = require('../repository/user.repository')

exports.serviceUser = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
    const user = await repository.insertOne({ user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile })
    return user
}

exports.serviceUserinfo = async (user_id) => {
    const user = await repository.joinOne(user_id)
    // console.log('===========service')
    // console.log(user)
    return user
}
// this.serviceUserinfo('web7722')

exports.serviceLogin = async ({user_id, user_pw}) => {
    // console.log(user_id, user_pw)
    const user = await repository.findOne({ user_id, user_pw })
    // console.log(user)
    return user
}

// const user_id = 'web7722'
// const user_pw = '1234'
// this.serviceLogin({ user_id, user_pw })