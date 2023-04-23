const pool = require("../../models/db")
const UserRepository = require("./user.repository")
const UserService = require("./user.service")
const UserController = require("./user.controller")


const userRepository = new UserRepository({ pool })
const userService = new UserService({ userRepository })
const userController = new UserController({ userService })

module.exports = {
    userController
}