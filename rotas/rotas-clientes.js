const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-clientes')
const {validadorDeCookie} = require('../middlewares/validadorDeCookie')


router.get('', validadorDeCookie, controlador.listClientes)
router.get('/:id', validadorDeCookie, controlador.getCliente)
router.post('', validadorDeCookie, controlador.createCliente)
router.post('/:id', validadorDeCookie, controlador.updateCliente)
router.delete('/:id', validadorDeCookie, controlador.deleteCliente)

module.exports = router;