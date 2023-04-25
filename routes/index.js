const routes = require("express").Router();
const cors = require("cors");
routes.use(cors());
const Gamedig = require("gamedig");

routes.get("/:serverIp/:port", async (req, res) => {
    console.log(req.params);
    await Gamedig.query({
        type: "css",
        host: req.params.serverIp,
        port: req.params.port
    })
    .then((stats) => {
        res.send(stats);
    })
    .catch(error => {
        res.send(error);
    })
    
    
}); 

module.exports = routes;