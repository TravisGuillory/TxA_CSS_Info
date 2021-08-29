const routes = require("express").Router();

const query = require("source-server-query");

let chucksIP = "64.182.125.196";
let chucksPort = 27017;
let timeout = 3000;

let serverInfo;
let currentPlayers = [];

let responseObject;

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
    let response = ServerQuery("players");

    res.send(response);
});
 
routes.get("/server-info", (req, res) => {
    console.log("Server Info.");
    let response = ServerQuery("server-info");

    res.send(response);
});

function ServerQuery(queryType) {
    switch (queryType){
        case "players":
            query.players(chucksIP, chucksPort, timeout)
                .then(data => {
                    console.log(data)
                    currentPlayers = data
                })
                .catch(console.log)
                .then(query.close);
            return currentPlayers;
        case "server-info":
             query.info(chucksIP, chucksPort, timeout)
                .then(data => responseObject = data)
                .catch(console.log)
                .then(query.close);
            return responseObject;  
    }
    
    
}

module.exports = routes;