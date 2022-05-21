require('dotenv').config()
let express = require('express');
let app = express();

console.log('Hello World')

//add log middlerware at the root level
app.use((req, res, next) => {
    const method = req.method
    const path = req.path
    const ip = req.ip

    console.log(`${method} ${path} - ${ip}`)
    next()
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({time: req.time})
})

app.get('/:word/echo', (req, res, next) => {
    next()
}, (req, res) => {
    res.json({echo: req.params.word})

})

app.get('/name', (req, res, next) => {
    next()
}, (req, res) => {
    const userData = req.query
    res.json({name: `${userData.first} ${userData.last}`})
})

// app.get('/', (req, res) => {
//     res.send("Hello Express")
// })

//for public assest example .css
app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    const pathFile = __dirname + '/views/index.html'
    res.sendFile(pathFile)
})

app.get('/json', (req, res) => {
    const obj = {"message": "Hello json"}

    if( process.env.MESSAGE_STYLE === 'uppercase') {
        obj.message = obj.message.toUpperCase()
    }
    
    res.json(obj)
})






































 module.exports = app;
