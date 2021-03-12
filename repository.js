var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/"
 module.exports  ={

         createDb: (dbName) => {
             var urlAdd = url + dbName;

             MongoClient.connect(url, function (err, db) {
                 if (err) throw err;
                 console.log("Database created!");
                 return "Database created!"
                 db.close();
             });
         },
     insCollection:(dbName,collectamName)=>{
         MongoClient.connect(url, function(err, db) {
             if (err) throw err;
             var dbo = db.db(dbName);
             dbo.createCollection(collectamName, function(err, res) {
                 if (err) throw err;
                 console.log("Collection created!");
                 db.close();
             });
         });
     },
     insContent:(dbName,collectamName,obj)=>{
         let test= new Promise(function(resolve, reject) {

             MongoClient.connect(url, function (err, db) {
                 if (err) throw err;
                 var dbo = db.db(dbName);
                 var myobj = {name: "Company Inc", address: "Highway 37"};
                 dbo.collection(collectamName).insertOne(obj, function (err, res) {
                     if (err) throw err;
                     console.log("1 document inserted");
                     // console.log(res);
                     resolve(res.insertedId)

                     db.close();
                 });
             });
         })
         return test

     },
     insMultCuntent:(dbName,collectamName,objLst)=>{
         let test= new Promise(function(resolve, reject) {

             MongoClient.connect(url, function (err, db) {
                 if (err) throw err;
                 var dbo = db.db(dbName);

                 dbo.collection(collectamName).insertMany(objLst, function (err, res) {
                     if (err) throw err;
                     console.log("Number of documents inserted: " + res.insertedCount);
                     resolve(res.insertedCount)

                     db.close();
                 });
             });
         })
         return test
     },
     findOne:(dbName,collectamName,obj)=>{
         let test= new Promise(function(resolve, reject) {
             MongoClient.connect(url, function (err, db) {
                 if (err) throw err;
                 var dbo = db.db(dbName);
                 dbo.collection(collectamName).findOne(obj, function (err, result) {
                     if (err) throw err;
                     // console.log(result.name);
                     resolve(result)

                     db.close();
                 });
             });
         })
         return test
     },
     all: (dbName,collectamName)=>{

         let test= new Promise(function(resolve, reject) {
              MongoClient.connect(url, function(err, db) {
                 if (err) throw err;
                 var dbo = db.db(dbName);
                 dbo.collection(collectamName).find({}).toArray(function(err, result) {
                     if (err) throw err;
                     // console.log(result);
                     resolve(result)
                     db.close();
                 });
             });

         });
return  test

     },
     findSpecial: (dbName,collectamName,obj)=>{

         let test= new Promise(function(resolve, reject) {
              MongoClient.connect(url, function(err, db) {
                 if (err) throw err;
                 var dbo = db.db(dbName);
                 dbo.collection(collectamName).find(obj).toArray(function(err, result) {
                     if (err) throw err;
                     // console.log(result);
                     resolve(result)
                     db.close();
                 });
             });

         });
return  test

     },
     deleteAllContent: (dbName,collectamName)=>{

         let test= new Promise(function(resolve, reject) {
             MongoClient.connect(url, function(err, db) {
                 if (err) throw err;
                 var dbo = db.db(dbName);
                 var myquery = {   };

                 dbo.collection(collectamName).deleteMany(myquery, function(err, obj) {
                     if (err) throw err;
                     console.log(obj.result.n + " document(s) deleted");
                     resolve(obj.result.n)
                     db.close();
                 });
             });

         });
return  test

     },
     deleteOne: (dbName,collectamName,obj)=>{

         let test= new Promise(function(resolve, reject) {
             MongoClient.connect(url, function(err, db) {
                 if (err) throw err;
                 var dbo = db.db(dbName);
                 var myquery = { address: 'Mountain 21' };
                 dbo.collection(collectamName).deleteOne(obj, function(err, obj) {
                     if (err) throw err;
                     console.log("1 document deleted");
                     resolve(1)
                     db.close();
                 });
             });

         });
return  test

     },
     updateDuc: (dbName,collectamName,query,newObj)=>{

         let test= new Promise(function(resolve, reject) {
             MongoClient.connect(url, function(err, db) {
                 if (err) throw err;
                 var dbo = db.db(dbName);
                 var myquery = { address: "Valley 345" };
                 var newvalues = { $set: newObj };
                 dbo.collection(collectamName).updateOne(query, newvalues, function(err, res) {
                     if (err) throw err;
                     // console.log("1 document updated");
                     resolve(res.result)
                     db.close();
                 });
             });

         });
return  test

     },

}
