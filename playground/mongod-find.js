const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    console.log('Connecting...')
    console.log('-------')
    if (err) {
        return console.log('Unale to connect to database!');
    }

    console.log('Connected to mongoDB Server...');
    const db = client.db('TodoApp')
    // db.collection('Todo').find({_id: new ObjectID('5f5ee121fd436818f8cfac23')}).toArray().then((docs) => {
    //     console.log('Todo List');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unbale to fetch TodoList', err);
    // })


    db.collection("Todo").find().count().then((count) => {
        console.log(`Todo Count: ${count}`);
    }, (err) => {
        console.log('Unbale to fetch TodoList', err);
    });
    // client.close();
})
