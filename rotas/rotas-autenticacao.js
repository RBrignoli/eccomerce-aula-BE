const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-autenticacao')

router.post('/login', controlador.login)

module.exports = router;