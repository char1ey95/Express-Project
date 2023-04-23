class UserService{
    constructor({ userRepository }){
        this.userRepository = userRepository
    }

    serviceUser = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
        try {
            const user = await this.userRepository.insertOne({ user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile })
            return user
        } catch (e) {
            throw(e)
        }
    }
    
    serviceUserinfo = async (user_id) => {
        try {
            const user = await this.userRepository.joinOne(user_id)
            return user
        } catch (e) {
            throw(e)
        }
    }
    
    serviceLogin = async ({user_id, user_pw}) => {
        try {
            const user = await this.userRepository.findOne({ user_id, user_pw })
            return user
        } catch (e) {
            throw(e)
        }
    }
}

module.exports = UserService