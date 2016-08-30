var express = require('express'),
    router = express.Router(),
    jwt = require('express-jwt');
userController = new(require('../controllers/userController')).User();
this.config = require('../config/config.js');

var auth = jwt({
    secret: this.config.secret,
    userProperty: 'payload'
});


router.post("/", userController.loginUser);
router.post("/register", userController.register);
router.post("/updateProfile", userController.updateProfile);
router.get("/profile", auth, userController.profile);


router.get("/", userController.hello);
router.get("/echo", userController.echo);
router.get("/:email", userController.getUserByEmail);

module.exports = router;
