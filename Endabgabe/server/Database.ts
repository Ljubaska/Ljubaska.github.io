/**
 * Simple database insertion and query for MongoDB
 * @author: Katja Kristina Ljubas
 */
import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let students: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
       databaseURL = "mongodb://ljubaska:07.01.Kk@ds237868.mlab.com:37868/ljubaska";
    // databaseURL = "mongodb://testuser:testpassword@ds129532.mlab.com:29532/eia2";
    databaseName = "ljubaska";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, handleConnect);

// connect-handler receives two standard parameters, an error object and a database object
function handleConnect(_e: Mongo.MongoError, _db: Mongo.Db): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _db.db(databaseName);
        students = db.collection("students");
    }
}

export function insert(_doc: StudentData): void {
    // try insertion then activate callback "handleInsert"
    students.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function find (_matrikel: MatrikelData, _callback: Function): void{
    console.log(_matrikel);
    var cursor: Mongo.Cursor = students.find(_matrikel);
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
    }
// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = students.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}