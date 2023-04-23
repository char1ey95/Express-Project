class AdminController {
    constructor({ adminService }){
        this.adminService = adminService
    }

    getLogin = async (req, res, next) => {
        try {
            res.render('admin/admin.html') 
        } catch (e) {
            next(e)
        }
    }
    
    postLogin = async (req, res, next) => {
        try {
            const { user_id, user_pw } = req.body
            const user = await this.adminService.serviceLogin({ user_id, user_pw })
            if(user.user_id !== 'admin') return next(new Error('접근할 수 없습니다!!'))
            res.setHeader('Set-Cookie', `level=${user.level}; path=/admin;`)
        
            res.redirect('/admin/userList')
        } catch (e) {
            next(e)
        }
    }
    
    getAdmin = async (req, res, next) => {
        try {
            const userList = await this.adminService.serviceUserList()
    
            res.render('admin/userList.html', {userList})
        } catch (e) {
            next(e)
        }
    }
    
    postUpdate = async (req, res, next) => {
        try {
            const body = JSON.stringify(req.body)
            const result = JSON.parse(body)
            await this.adminService.serviceUpdateUser(result)
        
            res.redirect('/admin/userList')
        } catch (e) {
            next(e)
        }
    }
    
    getProfile = async (req, res, next) => {
        try {
            const user_id = req.query.user_id
            const user = await this.adminService.serviceUserProfile(user_id)
        
            res.render('admin/userEdit.html', { user })
        } catch (e) {
            next(e)
        }
    }
}

module.exports = AdminController