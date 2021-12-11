const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken');
const router = express.Router();
const user = require("../controllers/user.controller");

router.post('/register', user.register);
router.post('/authenticate', user.authenticate);
router.post('/updateuser', user.updateUser);
router.delete('/deleteuser/:id', user.deletUser);
router.get('/all_users', user.getUsers);
router.get('/superior_user', user.getSuperiorUser);
router.post('/rest_password', user.restPassword);

module.exports = router;