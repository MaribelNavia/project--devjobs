const fs = require('fs')

const express = require('express')

const app = express()


const pageRouter = require('./src/routers/pageRouter')
const apiRouter = require('./src/routers/apiRouter')

app.use('/', pageRouter)
app.use('/api', apiRouter)

app.use(function(req,res){
	res.send('404 - Page Not Found!')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log(`App running in PORT: ${PORT}`)
})

