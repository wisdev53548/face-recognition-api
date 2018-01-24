const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('This is working')
})

app.post('/signin', (req, res) => {
	res.json('signin')
})

app.listen(3000, () => {
	console.log('Server is running on port 3000')
})




/*
ENDPOINT AND ROUTE PLANS

/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT = updated user or account
*/