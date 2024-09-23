const db = require('../db.json')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const {email, senha} = req.body;
        const lista_clientes = db.clientes
        if (!email || !senha) {
            res.status(406).send({erro:'email ou senha não enviado'})
        }
        const cliente = lista_clientes.find(
            (cliente) => cliente?.email == email
            )
        if (!cliente){
            res.status(404).send({error:'cliente nao encontrado'})
        }

        const senhaValida = bcrypt.compareSync(senha, cliente.senha)
        if (!senhaValida){
            res.status(401).send({error:'a senha não é valida'})
        }

        const token = jwt.sign(
            {
                nome: cliente.nome,
                email: cliente.email,
                _id: cliente.id
            },
            process.env.chave_criptografia,
            { expiresIn: 1000*60*60*24*365 }
        )

        res.cookie("TokenAulaBE", token).status(200).send({message:'ok'})
    } catch (e) {
        console.log(e)
    }
}

const logout = async (req, res) => {

    res.cookie("TokenAulaBE", "none", expiresIn=5)
    res.send({message:'o usuario fez logout'})
}


module.exports = {login, logout}