const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const keys = require('./configs/keys');
const passport = require('passport');

// initiate database, and config schemas
require('./models/products');
require('./models/user');

// initiate passport
require('./services/passport');

mongoose.connect(keys.mongoURI);

// configure passportjs cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

// initiate cookies handling for authentication
app.use(passport.initialize());
app.use(passport.session());

// enable routing
require('./routes/controller')(app);
require('./routes/authRoutes')(app);


let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})