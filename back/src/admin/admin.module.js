const pool = require("../../models/db")
const AdminRepository = require("./admin.repository")
const AdminService = require("./admin.service")
const AdminController = require("./admin.controller")


const adminRepository = new AdminRepository({ pool })
const adminService = new AdminService({ adminRepository })
const adminController = new AdminController({ adminService })

module.exports = {
    adminController
}