const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = function database() {
    console.log('Initializing products.js database model');

    const ProductSchema = new Schema({
        id: Number, 
        name: String,
        product: {
            stock: Number,
            price: Number
        },
        images: String
    } );

    mongoose.model('Product', ProductSchema);  
    console.log('End of Schema model') 
}