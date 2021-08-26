const express = require('express')
const path = require('path')
const exhbs = require('express-handlebars')

const app = express()
const port = 4000

app.set('view engine', 'hbs')
app.engine('hbs', exhbs({
    extname: 'hbs',
    defaultView: 'home',
    layoutsDir: __dirname + '/views/layouts'
}))

app.use('/', require(path.join(__dirname, 'routes/world.js')))

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})