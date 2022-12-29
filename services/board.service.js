const repository = require('../repository/board.repository')

exports.serviceList = async() => {
    const result = await repository.findAll()
    return result
}

exports.serviceView = async(idx) => {
    const [result] = await repository.findOne(idx)
    return result
}
