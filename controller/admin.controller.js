const service = require('../services/admin.service')

exports.getAdmin = async (req, res) => {
    const userList = await service.serviceUserList()

    res.render('admin/admin.html', {userList})
}

exports.getProfile = async (req, res) => {
    const user_id = req.query.user_id
    const user = await service.serviceUserProfile(user_id)

    res.render('admin/userEdit.html', { user })
}

exports.postLogin = async (req, res) => {
    const { user_id, user_pw } = req.body
    const user = await service.serviceLogin({ user_id, user_pw })
    if(user === undefined) return next(new Error('아이디와 패스워드가 일치하지 않습니다'))
    res.setHeader('Set-Cookie', `token=${user.user_id}; path=/;`)

    res.redirect('/')
}

exports.getLogin = async (req, res) => {

    res.render('admin/adminLogin.html')
}

exports.postUpdate = async (req, res) => {
    const result = JSON.stringify(req.body)
    await service.serviceUpdateUser(result)

    res.redirect('/admin')
}