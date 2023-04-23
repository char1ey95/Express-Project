class UserController {
    constructor({ userService }){
        this.userService = userService
    }

    getJoin = async (req, res, next) => {
        try {
            res.render('user/join.html')
        } catch (e) {
            next(e)
        }
    }
    
    postJoin = async (req, res, next) => {
        try {
            const { user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile } = req.body
            await this.userService.serviceUser({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile})
            res.redirect(`welcome?user_id=${user_id}`)
        } catch (e) {
            next(e)
        }
    }
    
    getWelcome = async (req, res, next) => {
        try {
            const user_id = req.query.user_id
            const user = await this.userService.serviceUserinfo(user_id)
            res.render('user/welcome.html',{ user } )   
        } catch (e) {
            next(e)
        }
    }
    
    getLogin = async (req, res, next) => {
        try {
            res.render('user/login.html')
        } catch (e) {
            next(e)
        }
    }
    
    postLogin = async (req, res, next) => {
        try {
            const { user_id, user_pw } = req.body
            const user = await this.userService.serviceLogin({ user_id, user_pw })
            if(user === undefined) return next(new Error('아이디와 패스워드가 일치하지 않습니다'))
            res.setHeader('Set-Cookie', `token=${user.user_id}; path=/;`)
            res.redirect('/')
        } catch (e) {
            next(e)
        }
    }
    
    // pushLevel = async (req, res) => {
    //     const { user_id, user_pw } = req.body
    //     const user = await service.serviceLogin({ user_id, user_pw })
    //     res.setHeader('Set-Cookie', `level=${user.level}; token=${user.user_id}; path=/;`)
    // }
    
    getLogout = async (req, res, next) => {
        try {
            res.setHeader('Set-Cookie', `token=; path=/;`)
            res.redirect('/')
        } catch (e) {
            next(e)
        }
    }
    
    getProfile =  async (req, res, next) => {
        try {
            const user_id = req.cookies.token
            const user = await this.userService.serviceUserinfo(user_id)
            res.render('user/profile.html', { user })
        } catch (e) {
            next(e)
        }
    }
}

module.exports = UserController