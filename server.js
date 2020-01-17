const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost:27017/tienda", { userNewUrParser: true})
    .then( db => console.log("Conexión a BD correcta"))
    .catch(err => console.log("Error al conectar a BD: " + err));



app.listen(3000, () => console.log("Servidor iniciado..."));