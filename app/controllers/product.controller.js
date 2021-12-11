var mongoose = require('mongoose');
require('../models/product.models')
var Product = mongoose.model('Product');

module.exports.addProduct = function(req, res, next){
    let product = new Product({
        name: req.body.name,
        descriptions: req.body.descriptions,
        category: req.body.category,
        brand: req.body.brand,
        availablity: req.body.availablity,
        product_code: req.body.product_code,
        price: req.body.price,
        images: req.body.file,
        quantity: req.body.quantity,
        colors: req.body.colors,
        sizes: req.body.sizes,
        alt: req.body.alt,
        title: req.body.title,
    })
    product.save({w:1}, function(err, results){
        if(err){
            res.json({success: false, msg:"Faild to load product"});
        }else{
            res.status(200);
            res.json(results);
            console.log(results)
        }
    })
}