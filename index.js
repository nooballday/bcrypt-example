const express = require('express'),
	app = express()

const bodyParser = require('body-parser')
const loginRoute = require('./login')
const registerRoute = require('./register')

app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send({
		hello: 'World!'
	})
})

app.post('/login', loginRoute)
app.post('/user', registerRoute)

app.listen(3400, console.log('Server is running!'))