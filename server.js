const fs = require('fs')

const express = require('express')

const ejs = require('ejs')

const app = express()


// Setup EJS engine
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
// configurar a ejs con el motor de las vistas
app.set('views', `${__dirname}/src/views`)


app.use(express.static(`${__dirname}/public`))

const pageRouter = require('./src/routers/pageRouter')
const apiRouter = require('./src/routers/apiRouter')

app.use('/', pageRouter)
app.use('/api', apiRouter)

app.use(function(req,res){
	res.render('404.ejs')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log(`App running in PORT: ${PORT}`)
})

