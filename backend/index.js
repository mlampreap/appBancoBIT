const mongoose = require('mongoose')//Llama el paquete -> mongoose instalado
const express = require('express'); //llama al paquete express
const app = express(); // la aplicacion principal la llamamos app y se ejecuta mediante express

const cuenta = require('./routes/cuenta') // llama el archivo routes que esta conectado al modelo y tienen todos los metodos del api

app.use(express.json()); // especifica que la aplicacion se va a manejar en formato json
app.use('/api/cuenta/',cuenta);//define las rutas para consulat cada uno de nuestros modelos

const port = process.env.PORT || 3003; // asigna el puerto donde se ejecuta el servidor
app.listen(port, () => console.log('Servidor ejecutando en puerto: ' + port));//escucha el puerto y si esta bien muestra el mensaje

mongoose.connect('mongodb://localhost/cuentasbd',{useNewUrlParser:true, useFindAndModify: false}) //se conecta a la base de datos de mongo llamada cuentas
    .then(()=>console.log("Se ha conectado con MongoDB: OK!"))//si se conecta con mongo imprime en consola el mensaje
    .catch(()=>console.log("No se ha conectado con MongoDB: ERROR!"))//si no se puede conectar con mongo imprime este mensajede error