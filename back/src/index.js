const main = require("./main/main.routes")
const user = require("./user/user.routes")
const board = require("./board/board.routes")
const admin = require("./admin/admin.routes")

module.exports = {
    main,
    user,
    board,
    admin
}