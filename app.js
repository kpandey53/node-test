const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080

//static file
app.use(express.static('public'))
app.use('/model', express.static(__dirname + 'public/model'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

//route for index
app.get('/', (req, res) => {
    res.render('index')
})
app.listen( port, console.log('server fired up at:' + " " + port ) );