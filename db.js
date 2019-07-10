const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname ="crud_mongodb";
const url = "mongodb+srv://admin:admin@cluster0-hs8pp.mongodb.net/crud_mongodb?retryWrites=true&w=majority";
const mongoOptions = {useNewUrlParser: true};
const state = { 
    db: null
};

const connect = (cb) => {
    if(state.db)
        cb();
    else{
        MongoClient.connect(url,mongoOptions, (err,client) =>{
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}
const getPrimaryKey = (_id) =>{
    return ObjectID(_id);
}

const getDB = () => state.db;
module.exports = {getDB, connect, getPrimaryKey};