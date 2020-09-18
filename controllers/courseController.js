'use strict'

const Courses = require('../modals/courses.js')

// get route => /courses
const allCourses = (req,res) => {
	Courses.fetchCourses((courses) => {
		return res.send(courses)
	});
}

// post route => /course
const postCourse = (req,res) => {
	if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('description') && req.body.hasOwnProperty('submission')){
		const newCourse = new Courses(null,req.body.name,req.body.description,req.body.submission)
		newCourse.postCourse()
		return res.send('new course added ...')
	}
	return res.send('invalid course format ...')
}

// get route => /course/:courseid
const getCourse = (req,res) => {
	Courses.fetchCourses((courses) => {
		for (const item of courses){
			if (item.id == req.params.courseid){
				return res.send(item)
			}
		}
	})
}

// put route => /course/:courseid
const putCourse = (req,res) => {
	const updateCourse = new Courses(req.params.courseid,req.body.name,req.body.description,null)
	updateCourse.putCourse()
	return res.send('course is updated ...')
}

//delete route => /course/:courseid
const deleteCourse = (req,res) => {
	Courses.deleteCourse(req.params.courseid)
	return res.send('course deleted successfully ...')
}

module.exports = {allCourses,postCourse,getCourse,putCourse,deleteCourse}