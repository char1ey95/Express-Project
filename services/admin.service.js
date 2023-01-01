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
    return user
}

exports.serviceUpdateUser = async (body) => {
    const obj = JSON.parse(body)
    const [id, author, level] = Object.entries(obj)
    const [key, val] = id
    

    // await repository.updateUser(user_id, user_author, level)
}


// {
//     user_id: [ 'ckstn410', 'normal', 'normal1', 'normal2', 'normal3', 'normal4' ],
//     user_author: [ '2', '2', '2', '2', '2', '2' ],
//     level: [ '1', '1', '1', '1', '1', '1' ]
// }

// {user_id : 'ckstn410', user_author : '2', level : '1'}
// {user_id :  'normal' , user_author : '2', level : '1'}
// {user_id :  'normal1', user_author : '2', level : '1'}
// {user_id :  'normal2', user_author : '2', level : '1'}
// {user_id :  'normal3', user_author : '2', level : '1'}
// {user_id :  'normal4', user_author : '2', level : '1'}