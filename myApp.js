let express = require('express');
let app = express();

console.log('Hello World')

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
    res.json(obj)
})






































 module.exports = app;
