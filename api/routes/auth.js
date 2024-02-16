const express = require('express')
const { registerController, loginController, logoutController, refetchUserController } = require('../controllers/authController')
const router = express.Router()



router.post("/register", registerController)

router.post("/login", loginController)

router.get("/logout", logoutController)

router.get("/refetch", refetchUserController)



module.exports  = router