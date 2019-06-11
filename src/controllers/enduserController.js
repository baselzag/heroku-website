const { MongoClient, ObjectID } = require('mongodb');
const dbUrl = 'mongodb+srv://baselzag:BBB123@cluster0-5vmay.mongodb.net/test?retryWrites=true';
const dbName = 'herokuwebDB';


function getAdvs(done){
    (async function mongo(){
        let client;
        try {
           client = await MongoClient.connect(dbUrl,{useNewUrlParser:true});
           const db = client.db(dbName);
           const data = await db.collection('advs').find() .toArray();
           client.close();
           done(true,data);
        } catch (error) {
            client.close();
            done(false,error.message);

        }

    }());
}


module.exports={getAdvs};