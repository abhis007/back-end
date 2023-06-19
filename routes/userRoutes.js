const express = require("express");
const router =  express.Router();
const userController = require("../controllers/userController")


router.post('/register',userController.registerUser)
router.post('/authUser',userController.authUser)
router.post('/logout',userController.logout)
router.route('/userProfile').get(userController.getUserProfile).put(userController.updateUserProfile)
   

module.exports = router;