const mongoose = require('mongoose');
const ProductSchema =new mongoose.Schema({
    images: {type: Array},
    name: {type: String},
    category: {type: String},
    brand: {type: String},
    country: {type:String},
    descriptions: {type: String},
    availablity: {type: Boolean, default: true},
    retail_price: {type: Number},
    wholesale_price: {type: Number},
    guarante: {type: String},
    sales_service: {type: Boolean, default: true},
    home_delivery: {type: Boolean, default: true},
    product_code : {type: String},
    quantity: {type: Number},
    colors: {type: Array},
    sizes: {type: Array},
    like:{type:Array, default: []},
    comment:{type:Array, default: []}
},{
    timestamps:true
});
mongoose.model('Product', ProductSchema);