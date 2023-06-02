// Packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// Initialize
const app = express();
const PORT = 3000;
const DB = "mongodb+srv://Manas:Food1234@cluster0.xfahjto.mongodb.net/?retryWrites=true&w=majority";

// Middleware
const authRouter = require("./routes/auth.js");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(authRouter);


//Connection
mongoose.connect(DB).then(() => {
     console.log('conn true');
 }).catch((e) => {
     console.log('err');
 })

app.get('/start', (req, res) => {
    res.json({ hi: 'hello' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log("listening true");
});
