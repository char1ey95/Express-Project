class BoardService{
    constructor({ boardRepository }){
        this.boardRepository = boardRepository
    }

    serviceList = async()=> {
        const result = await this.boardRepository.findAll()
        return result
    }
    
    serviceView = async(idx) => {
        const [result] = await this.boardRepository.findOne(idx)
        await this.boardRepository.hitUp(idx)
        return result
    }
    
    serviceWrite = async(body, user_id) => {
        const {subject, content} = body
        await this.boardRepository.insert(subject, user_id, content)
    }
    
    serviceLogin = async (user_id) => {
        const user = await this.boardRepository.findUser(user_id)
        return user
    }
    
    serviceModify = async(body, idx) =>  {
        const {content} = body
        await this.boardRepository.update(content,idx)
        return 
    }
    
    serviceDelete = async(idx) => {
        await this.boardRepository.delete(idx)
    }
}

module.exports = BoardService