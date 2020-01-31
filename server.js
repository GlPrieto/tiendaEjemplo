require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const app = express();


// CONEXIÓN A BASE DE DATOS
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
    .then(db => console.log("Conexión a BD correcta"))
    .catch(error => console.log("Error al conectarse a la BD" + error));


// MIDDLEWARE
app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);


// SERVIDOR WEB
app.listen(process.env.PORT || 3000, () => console.log("Servidor iniciado..."));
