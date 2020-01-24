const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const app = express();


// CONEXIÓN A BASE DE DATOS
mongoose.connect("mongodb+srv://gloria:gloria@cluster0-v6pcu.mongodb.net/tienda?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(db => console.log("Conexión a BD correcta"))
    .catch(error => console.log("Error al conectarse a la BD" + error));


// MIDDLEWARE
app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);


// SERVIDOR WEB
app.listen(process.env.PORT || 3000, () => console.log("Servidor iniciado..."));
