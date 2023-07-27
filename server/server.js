const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8081;
const app = express();
app.use(cors());

const survive = require("./lib/survive");
const math = require("./lib/math");

app.get('/', (req, res) => {
    res.json("You're on the root page");
})

app.get("/survive", survive)

app.get("/math", math)



app.listen(PORT, () => console.log('We are listening' + PORT));