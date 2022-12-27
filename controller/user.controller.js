const service = require('../services/user.service')

exports.getJoin = (req, res) => {
    res.render('user/join.html')
}

exports.postJoin = async (req, res) => {
    const { user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile } = req.body
    const user = await service.serviceUser({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile})

    res.setHeader('Set-Cookie', `token=${user.user_id}; path=/;`)
    res.redirect('/')
}

exports.getLogin = (req, res) => {
    res.render('user/login.html')
}

// exports.postLogin = (req, res) => {
//     res.redirect()
// }

exports.getProfile = (req, res) => {
    res.render('user/profile.html')
}

