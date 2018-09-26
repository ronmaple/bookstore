const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = (app) => {
    console.log('controller.js invoked');

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    
    // parse application/json
    app.use(bodyParser.json())

    app.get('/api', async (req, res) => {
        const Product = mongoose.model('Product');
        const data = await Product.find({});
        res.json( { data } );
    })


    /* 
        currently, only saves 1 item in the shopping cart.
        change to multiple selection: 
            Update when exists,
            insert if doesn't exist
    */

    app.post('/saveCart', async (req, res) => {
        const User = mongoose.model('users');

        const id = req.body.itemID;
        let quantity = req.body.itemQuantity;


        User.update({ id: 0}, { currentShoppingCart: [{ id, quantity }]}, (err, doc ) => {
            if (err) return console.error(err);
            console.log(doc);
        })
    
    })

} 



