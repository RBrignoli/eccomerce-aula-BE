const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas_produtos = require('./rotas/rotas-produto')
const clientes = require('./rotas/rotas-clientes')
const rotas_autenticacao = require('./rotas/rotas-autenticacao')

app.use(bodyParser.json())
app.use('/produtos', rotas_produtos)
app.use('/clientes', clientes)
app.use('/auth', rotas_autenticacao)



app.listen(8000)

module.exports = app;