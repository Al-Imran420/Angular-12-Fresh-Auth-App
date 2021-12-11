const express = require('express');
const router = express.Router();
const product = require("../controllers/product.controller");

router.post('/addproduct', product.addProduct);

module.exports = router;