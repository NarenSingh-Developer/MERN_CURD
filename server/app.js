const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({path : "./config.env"})
const PORT = process.env.PORT;
app.use(express.json());
app.use(require("./auth"));
app.listen(PORT , ()=> {
    console.log(`port no ${PORT} `);
})