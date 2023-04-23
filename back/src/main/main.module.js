const pool = require("../../models/db")
const MainRepository = require("./main.repository")
const MainService = require("./main.service")
const MainController = require("./main.controller")


const mainRepository = new MainRepository({ pool })
const mainService = new MainService({ mainRepository })
const mainController = new MainController({ mainService })

module.exports = {
    mainController
}