"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var feuerwerkEndabgabe;
(function (feuerwerkEndabgabe) {
    let fireworkCollection;
    let databaseUrl = "mongodb+srv://test:EIA2@cluster0.icb8i.mongodb.net/Cluster0?retryWrites=true&w=majority"; // "mongodb://localhost:27017";
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server startet auf Port " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true }; //mit diesen options eine Verbindung zur DB aufbauen
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        fireworkCollection = mongoClient.db("eia2").collection("score");
        console.log("Database connection", fireworkCollection != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("handleRequest");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); // der Url.parser wandelt den UrlWithParsedQuery in ein anders Format um. Durch true wird daraus ein besser lesbares assoziatives Array. 
            let command = url.query["command"];
            console.log("Der URL", _request.url);
            if (command === "getTitels") {
                getTitels(_request, _response);
                console.log("Titel geholt");
                return;
            }
            if (command === "getAllDatas") {
                getAllDatas(_request, _response);
                console.log("Titeldaten geholt");
                return;
            }
            else {
                storeRocket(url.query, _response);
                console.log("Daten gespeichert");
            }
            return;
        }
        _response.end();
    }
    async function getTitels(_request, _response) {
        let result = fireworkCollection.find({}, { projection: { _id: 0, rocketTitel: 1 } });
        let arrayResult = await result.toArray();
        let listOfTitels = JSON.stringify(arrayResult);
        console.log(listOfTitels);
        _response.write(listOfTitels); //Übergabe der Daten an den client
        _response.end();
    }
    async function getAllDatas(_request, _response) {
        let result = fireworkCollection.find();
        let arrayResult = await result.toArray();
        let jsonResult = JSON.stringify(arrayResult);
        // console.log(jsonResult);
        _response.write(jsonResult); //Übergabe der Daten an den client
        _response.end();
    }
    function storeRocket(_userRocket, _response) {
        fireworkCollection.insertOne(_userRocket);
        _response.end();
    }
    // async function getTitels(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    //     let result: Mongo.Cursor<any> = fireworkCollection.find({}, { projection: { _id: 0, rocketTitel: 1 } });
    //     let arrayResult: string[] = await result.toArray();
    //     let jsonResult: string = JSON.stringify(arrayResult);
    //     console.log(jsonResult);
    //     _response.write(jsonResult); //Übergabe der Daten an den client
    //     _response.end();
    // }
})(feuerwerkEndabgabe = exports.feuerwerkEndabgabe || (exports.feuerwerkEndabgabe = {}));
//# sourceMappingURL=server.js.map