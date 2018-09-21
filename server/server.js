const mongoose = require('mongoose');
const express = require('express');


// enable routing
const app = express();
require('./routes/controller')(app);

// initiate databases
mongoose.connect(require('./configs/keys').mongoURI);
require('./models/products')();
require('./models/user')();


let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})