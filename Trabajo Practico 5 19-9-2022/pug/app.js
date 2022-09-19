const express = require('express')
const productsRouter = require('./routes/products')
const app = express()

const server = app.listen(8081, () => console.log('Server Up'))



app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.set('views', './views')
app.set('view engine', 'pug')


app.get('/', (req, res) => {
    res.render('crear-producto')
})

app.use('/products', productsRouter)