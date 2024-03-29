const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const Users = require("./Routes/Api/Users");
const app = express();

//BodyParser Middleware
app. use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect  to MongoDB
mongoose.connect(
    db, {useNewUrlParser: true}
)
.then(() => console.log("Connected!"))
.catch(() => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

//Routes
app.use("/api/users", Users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is UP on port ${port} !`));
