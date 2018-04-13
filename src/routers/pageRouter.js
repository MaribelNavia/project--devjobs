const Router = require('express').Router;

const pageRouter = Router()



pageRouter.get('/', (req, res) => {
	res.send('HOME Page')
})

pageRouter.get('/about', (req, res) => {
	res.send('ABOUT Page')
})


module.exports = pageRouter