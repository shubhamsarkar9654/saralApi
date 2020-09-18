'use strict'

const express = require('express')

const routeCourses = require('./routes/routeCourses')
// console.log(routeCourses.)

const app = express();

app.use(express.json())


app.use(routeCourses)

app.use((req,res) => {
	res.send('<h1>page not found!</h1>')
})

app.listen(3000,() => {
	console.log('I am listing through port 3000...')
})

