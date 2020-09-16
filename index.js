const express = require('express')
const app = express()
const porta = 80

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index.ejs', {gerador: null})
})

app.post('/', (req, res) => {
    let min = req.body.min,
        max = req.body.max


        let random = Math.floor(Math.random() * ((max - min) + 1)) + parseInt(min)
        //res.render('index', {gerador: random.toFixed(1)})
        res.render('index', {gerador: random})

})

app.listen(porta, () => {
    console.log(`Online na porta ${porta}`)
})