const service = require('../services/user.service')

exports.getJoin = (req, res) => {
    res.render('user/join.html')
}

exports.postJoin = async (req, res) => {
    const { user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile } = req.body
    const user = await service.serviceUser({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile})
    // console.log(user)
    // res.setHeader('Set-Cookie', `token${user.user_id}; path=/;`)
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

exports.postLogin = async (req, res, next) => {
    const { user_id, user_pw } = req.body
    const user = await service.serviceLogin({ user_id, user_pw })
    console.log(user)
    
    if(user === undefined) return next(new Error('아이디와 패스워드가 일치하지 않습니다'))

    res.setHeader('Set-Cookie', `token=${user.user_id}; path=/;`)
    res.redirect('/')
}

exports.getLogout = (req, res) => {
    res.setHeader('Set-Cookie', `token=; path=/;`)
    res.redirect('/')
}

exports.getProfile = (req, res) => {
    // const user_id = req.query.user_id
    // const user = await serviceProfile(user_id)
    res.render('user/profile.html')
}

