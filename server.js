const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const app = express();

mongoose.connect("mongodb://localhost:27017/tienda", { userNewUrParser: true})
    .then( db => console.log("Conexión a BD correcta"))
    .catch(err => console.log("Error al conectar a BD: " + err));

app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);

app.listen(3000, () => console.log("Servidor iniciado..."));
