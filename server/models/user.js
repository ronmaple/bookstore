const mongoose = require('mongoose');
const { Schema } = mongoose;

console.log(' Initializing products.js user model')

const UserSchema = new Schema({
    id: Number, 
    googleId: String,
    username: String,
    currentShoppingCart: [
        {
            id: Number,
            quantity: Number
        }
    ]
} );

mongoose.model('users', UserSchema);  

console.log('End of UserSchema model') 
