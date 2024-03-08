const express = require("express")
const { getUserController, updateUserController, followUserController, unfollowUserController, blockUserController, unblockUserController,getBlockedUsersController  } = require("../controllers/userController")
const router = express.Router()

router.get("/:userId", getUserController)

router.put("/update/:userId",updateUserController)

router.post("/follow/:userId", followUserController)

router.post("/unfollow/:userId", unfollowUserController)

router.post("/block/:userId", blockUserController)

router.post("/unblock/:userId", unblockUserController)

router.get("/blocked/:userId", getBlockedUsersController)



module.exports = router