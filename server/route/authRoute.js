const { signUp, login ,checkEmailExists} = require('../controller/authController');

const router = require('express').Router();


router.route('/signup').post(signUp)

router.route('/login').post(login);

router.route('/check-email').post(checkEmailExists);

module.exports = router;