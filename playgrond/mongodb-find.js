//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true},(err, client)=> {


if(err){

  return console.log('Unable to connect to MongoDB Server');
}
  const db = client.db('TodoApp')
  console.log('Connect to MongoDB server');

// db.collection('Todos').find({
//   _id:new ObjectID('5b3670a62717420fd8b32beb')
// }).toArray().then((docs)=>{
//     console.log('Tos');
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err) =>{
//
//   console.log('Unable to fetch todos', err);
//   });

db.collection('Todos').find().count().then((count)=>{
    console.log('Todos');
    console.log(`Todos count:${count}`);
}, (err) =>{

  console.log('Unable to fetch todos', err);
  });

    //db.close();
 });
