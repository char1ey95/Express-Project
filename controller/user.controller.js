const service = require('../services/user.service')

exports.getJoin = (req, res) => {
    res.render('user/join.html')
}

exports.postJoin = async (req, res) => {
    const { user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile } = req.body
    const user = await service.serviceUser({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile})
    // console.log(user)
    res.redirect(`welcome?user_id=${user_id}`)
}

exports.getWelcome = async (req, res) => {
    const user_id = req.query.user_id
    const user = await service.serviceWelcome(user_id)
    res.render('user/welcome.html',{ user } )
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

