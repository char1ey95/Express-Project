class AdminService{
    constructor({ adminRepository }){
        this.adminRepository = adminRepository
    }

    serviceUserList = async () => {
        try {
            const [result] = await this.adminRepository.findAll()
            return result
        } catch (e) {
            next(e)
        }
    }
    
    serviceLogin = async ({user_id, user_pw}) => {
        try {
            const user = await this.adminRepository.findOne({ user_id, user_pw })
            return user
        } catch (e) {
            next(e)
        }
    }
    
    serviceUserProfile = async (user_id) => {
        try {
            const [user] = await this.adminRepository.findProfile(user_id)
            return user
        } catch (e) {
            next(e)
        }
    }
    
    serviceUpdateUser = async (body) => {
        try {
            const { user_id, user_author, level } = body
            await this.adminRepository.updateUser(user_id, user_author, level)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = AdminService