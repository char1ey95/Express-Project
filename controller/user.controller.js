const service = require('../services/user.service')

exports.getJoin = (req, res) => {
    res.render('user/join.html')
}

// exports.postJoin = (req, res) => {
//    res.redirect()
// }

exports.getLogin = (req, res) => {
    res.render('user/login.html')
}

// exports.postLogin = (req, res) => {
//     res.redirect()
// }

exports.getProfile = (req, res) => {
    res.render('user/profile.html')
}

