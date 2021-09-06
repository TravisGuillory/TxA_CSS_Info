const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

app.use(cors());



const port = process.env.PORT || 8000;

let chucksIP = "64.182.125.196";
let chucksPort = 27017;
let timeout = 2000;

let currentPlayers = [];
let serverInfo;

app.use("/", routes);



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});