require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const rotas_produtos = require('./rotas/rotas-produto')
const clientes = require('./rotas/rotas-clientes')
const rotas_autenticacao = require('./rotas/rotas-autenticacao')

const swaggerDocument = YAML.load('./docs/documentacao.yaml')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotas_produtos)
app.use('/clientes', clientes)
app.use('/auth', rotas_autenticacao)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.listen(8000)

module.exports = app;