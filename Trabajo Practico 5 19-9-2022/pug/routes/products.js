const express = require('express')
const router = express.Router()

const Manager = require('../manager.js')
const manager = new Manager()

router.get('/', (req, res) => {
    let result = manager.findAll()
    res.render('get-products', {
        products: result
    })
})



router.post('/', (req, res) => {
   
    manager.create(req.body)
    res.redirect('/')
})



module.exports = router