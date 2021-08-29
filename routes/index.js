const routes = require("express").Router();

const query = require("source-server-query");

let chucksIP = "64.182.125.196";
let chucksPort = 27017;
let timeout = 3000;

let serverInfo;
let currentPlayers = [];



routes.get("/", (req, res) =>  {
    query
        .info(chucksIP, chucksPort, timeout)
        .then(data => {
            serverInfo = data;
        })
        .catch(console.log)
        .then(query.close);
    
    res.send(serverInfo);
});

routes.get('/players', (req, res) => {
    console.log("Players");
    let response = ServerQuery("players", chucksIP, chucksPort);

    res.send(response);
});
 
routes.get("/server-info", (req, res) => {
    console.log("Server Info.");
    let response = ServerQuery("server-info", chucksIP, chucksPort);

    res.send(response);
});

routes.get("/players/:serverIp/:port", async (req, res) => {
    let response = await ServerQuery("players", req.params.serverIp.toString(), parseInt(req.params.port) )
    console.log(req.params)
    res.send(response);
});

routes.get("/server-info/:serverIp/:port", async (req, res) => {
    let response = await ServerQuery("server-info", req.params.serverIp.toString(), parseInt(req.params.port) )
    console.log(req.params)
    res.send(response);
});

function ServerQuery(queryType, ip, port){
    switch (queryType){
        case "players":
            query.players(ip, port, 3000)
                .then(data => {
                    console.log(data)
                    currentPlayers = data
                    currentPlayers.sort((a,b) => {return b.score - a.score})
                })
                .catch(console.log)
                .then(query.close);
            return currentPlayers;
        case "server-info":
             query.info(chucksIP, chucksPort, timeout)
                .then(data => serverInfo = data)
                .catch(console.log)
                .then(query.close);
            return serverInfo;
    }    

}


module.exports = routes;