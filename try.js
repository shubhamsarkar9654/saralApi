// // let a = {
// // 	name:'banner',
// // 	age:21
// // }

// // console.log(a.ddddf)

// a = [1,2,3,4]

// b = a
// b[]

// console.log(a,b)

'use strict'

const express = require('express')

const Courses = require('./modals/courses.js')

const app = express();
app.use(express.json())


app.put('/course/:courseid',async(req,res) => {
	const updateCourse = await new Courses(req.params.courseid,req.body.name,req.body.description)
	await updateCourse.putCourse()
	await Courses.fetchCourses(courses => {
		res.send(courses)
	})
})

app.listen(3000,()=>{
	console.log('hey dude I am listing...')
})