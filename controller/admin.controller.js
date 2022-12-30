const service = require('../services/admin.service')

exports.getAdmin = async (req, res) => {
    const userList = await service.getUserList()
    res.render('admin/admin.html', {userList})
}

// exports.getProfile = async (req, res) => {
//     res.render('user/profile.html', {userList})
// }

exports.postLogin = async (req, res, next) => {
    const { user_id, user_pw } = req.body
    const user = await service.serviceLogin({ user_id, user_pw })
    
    if(user === undefined) return next(new Error('아이디와 패스워드가 일치하지 않습니다'))

    res.setHeader('Set-Cookie', `token=${user.user_id}; path=/;`)
    res.redirect('/')
}

exports.getLogin = (req, res) => {
    res.render('admin/adminLogin.html')
}