const repository = require('../repository/board.repository')

exports.serviceList = async() => {
    const result = await repository.findAll()
    console.log(result)
    return result
}
