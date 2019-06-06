
const {
    MongoClient
} = require('mongodb');

const dbUrl = 'mongodb+srv://baselzag:BBB123@cluster0-5vmay.mongodb.net/test?retryWrites=true';
const dbName = 'herokuwebDB';

function checkUser(email, password, callback) {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const col = await db.collection('users');
            const user = await col.findOne({
                username: email,
                password: password
            });
            client.close();
            callback(user);
        } catch (error) {
            console.log(error.message);
            client.close();
            callback(null);
        }

    }());
}

function addUser(email, password, callback) {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const user = await db.collection('users').findOne({username: email});
            if(user){
                client.close();
                callback (null)
            }else{
                const response = await db.collection('users').insertOne({
                    username: email,
                    password: password
                });
                //console.log(response);
                client.close();
                callback (response.ops[0]); // ops : it will show the first object in the array( we find this array wenn we use console.log and we find ops)
            }
        } catch (error) {
            console.log(error.message);
            client.close();
            callback (null); // null means the user is exist
        }

    }());
}


module.exports = {checkUser, addUser};