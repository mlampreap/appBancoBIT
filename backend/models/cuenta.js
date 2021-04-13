const mongoose = require('mongoose')//Llama el paquete -> mongoose instalado


//definicion del modelo es directamente relacionado con la coleccion de MongoDB
const cuentasSchema = new mongoose.Schema(
    {
        nombre: String,
        saldo: Number,
        date: {type: Date, default: Date.now}
    }
)

const Cuenta = mongoose.model('cuenta', cuentasSchema)

module.exports.Cuenta = Cuenta //exporta el modelo cuenta

//------------------------------------------------------------------------------------------------------------


