const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const music = require('./lib/musics')
const handlers = require('./lib/handlers')

// Static contents
app.use(express.static(__dirname+'/public'))

// Configure Handlebars view
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.set("views", "./views");

// Home
app.get('/', handlers.home)

// About
app.get('/about', handlers.about)

// Page not found 404 customized
app.use(handlers.notFound)

// Page 500 customized
app.use(handlers.serverError)

// app.listen(port, () => console.log(
//     `Express started on http://localhost:${port};`
//     + `press Ctrl-C to terminate.`
// ))

if(require.main === module) {
    app.listen(port, () => {
        console.log(`Express started on http://localhost:${port}` + '; press Ctrl-C to terminate')
    })
} else {
    module.exports = app
}