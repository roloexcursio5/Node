const express = require('express');
const	app = express();
require('dotenv').config();

//API
app.get('/', (req, res) => {
/*  res.header('Access-Control-Allow-Origin', '*');
  async function main(){
    await connectToMongo();
    return await coleccion.find({}).sort({"titulo": 1})}
  main()
    .then((series) => {	 */
      res.status(200).send({"titulo": "dale", "year":2020});
/*    })
    .catch(console.error)
    .finally(() => mongoose.connection.close());*/
});

/*
//API INDIVIDUAL
app.get('/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  async function main(){
    await connectToMongo();
    return await coleccion.findOne({"id":req.params.id})}
  main()
    .then((serie) => {	 
      res.status(200).send(serie);
    })
    .catch(console.error)
    .finally(() => mongoose.connection.close());
});*/


app.listen(8080);