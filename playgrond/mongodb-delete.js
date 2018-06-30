//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true},(err, client)=> {


if(err){

  return console.log('Unable to connect to MongoDB Server');
}
  const db = client.db('TodoApp')
  console.log('Connect to MongoDB server');
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
    //   console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    //   console.log(result);
    // });

    // findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //   console.log(result);
    // });
    //db.close();
 });
