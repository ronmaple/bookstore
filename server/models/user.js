const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = function database() {
    console.log(' Initializing products.js user model')
    
    const UserSchema = new Schema({
        id: Number, 
        username: String,
        currentShoppingCart: [
            {
                id: Number,
                quantity: Number
            }
        ]
    } );

    mongoose.model('User', UserSchema);  
    
    console.log('End of UserSchema model') 
}