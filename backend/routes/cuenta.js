//controlador del modelo cuenta

const express = require('express'); //llama al paquete express
const { Cuenta } = require('../models/cuenta');

const router = express.Router();// usa el metodo router para el manejo de las  rutas del proyecto


//definicion de metodo get
router.get('/',async(req, res) => {
    const cuentas = await Cuenta.find()
    res.send(cuentas);
});

//definicion de metodo post
router.post('/', async(req, res) => {
    const cuenta = new Cuenta({
            nombre: req.body.nombre,
            saldo: req.body.saldo, 
        })
    
        //verificacion de datos guardados
        const resultado = await cuenta.save()
        res.status(201).send(resultado)
    })

router.put('/:nombre', async(req, res)=> {
    Cuenta.findOneAndUpdate({name: req.params.name}, req.body)
    const name = getName(req.body.nombre)
})

    module.exports = router;



