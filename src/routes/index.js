const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
    response.status(200).send({
        title: 'Reprograma Turma MELI - Projeto Prático Extra',  
        version: '0.0.1',
        status: 'EITA <3'
    })
})

module.exports = router