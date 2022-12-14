const express = require('express')
const handlebars = require('express-handlebars')
const productsRouter = require('./routes/products')
const app = express()

const server = app.listen(8081, () => console.log('Server Up'))



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars', handlebars.engine())

app.set('views', './views')
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
    res.render('crear-producto')
})

app.use('/products', productsRouter)