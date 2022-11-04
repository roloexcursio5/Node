const express = require('express');
const	app = express();
require('dotenv').config();

// importo mongoose y genero una función asíncrona para usar luego
const mongoose = require("mongoose");
const connectToMongo = async () => {
  await mongoose.connect(process.env.SECRETSESSION);
  return mongoose;
};  // me hizo sacar todos los parámetros pq desde la versión 6 están deprecados (no sé que impacto tiene eso). Asi funciona

// se genera el esquema
const serieSchema = new mongoose.Schema({
      id: Number,
      titulo: String,
      protagonista: String,
      pais: String
    });
    
    const tabla = "series"  // es el nombre de la coleccion

// se define la coleccion usando el esquema
const coleccion = mongoose.model(tabla, serieSchema);

//API
app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  async function main(){
    await connectToMongo();
    return await coleccion.find({}).sort({"titulo": 1})}
  main()
    .then((series) => {	 
      res.status(200).send(series);
    })
    .catch(console.error)
    .finally(() => mongoose.connection.close());
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