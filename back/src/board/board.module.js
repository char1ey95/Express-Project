const pool = require("../../models/db")
const BoardRepository = require("./board.repository")
const BoardService = require("./board.service")
const BoardController = require("./board.controller")


const boardRepository = new BoardRepository({ pool })
const boardService = new BoardService({ boardRepository })
const boardController = new BoardController({ boardService })

module.exports = {
    boardController
}