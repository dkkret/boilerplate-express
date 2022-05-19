let express = require('express');
let app = express();

console.log('Hello World')

// app.get('/', (req, res) => {
//     res.send("Hello Express")
// })

app.get('/', (req, res) => {
    const pathFile = __dirname + '/views/index.html'
    res.sendFile(pathFile)
})


app.use('/public', express.static(__dirname + '/public'))




































 module.exports = app;
