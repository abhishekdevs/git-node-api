//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true},(err, client)=> {


if(err){

  return console.log('Unable to connect to MongoDB Server');
}
  const db = client.db('TodoApp')
  console.log('Connect to MongoDB server');



  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // },(err, result) => {
  //   if(err) {
  //   return console.log('Unable to insert todo', err);
  //    }
  //
  // console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

//   db.collection('Users').insertOne({
//       name:'Abhishek kumar',
//       age : 26,
//       location:'New Delhi'
//   }, (err , result) =>{
//
//     if(err){
//       return console.log('unable to insert User',err);
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
//   });
//   client.close();
 });
