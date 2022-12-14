const express = require('express')
const router = express.Router()

const Manager = require('../controllers/chat.manager')
const manager = new Manager()

router.get('/', (req, res) => {
    manager.findAll().then(result => res.send(result))
})

router.post('/', (req, res) => {
    
    manager.create(req.body).then(result => res.send(result))
})

module.exports = router