'use sririct'

const path = require('path')
const fs = require('fs')

const readFileCourses = (cb) => {
	fs.readFile(path.join(__dirname,'..','data','courses.json'),(err,data) => {
		if (!err) {
			cb(JSON.parse(data))
		}else{
			console.log(err)
		}
	})
}

class Courses {
	constructor (id,name,description,submission) {
		this.id = id,
		this.name = name,
		this.description = description,
		this.submission = submission
	}
	static fetchCourses(cb) { 
		readFileCourses(cb)
	}
	postCourse(){
		readFileCourses(courses => {
			const newCourse = {}
			newCourse.id = courses[courses.length-1].id+1
			newCourse.name = this.name
			newCourse.description = this.description
			newCourse.submission = this.submission
			courses.push(newCourse)
			fs.writeFile(path.join(__dirname,'..','data','courses.json'),JSON.stringify(courses,null,4),err => {
				console.log(err)
			})

		})
	}
	putCourse() {
		readFileCourses(async(courses) => {
			const updateCourseIndex = await courses.findIndex(p => p.id == this.id)  
			const updateCourses = await [...courses]
			if (this.hasOwnProperty('name')){
				updateCourses[updateCourseIndex].name = await this.name
			}
			if (this.hasOwnProperty('description')){
				updateCourses[updateCourseIndex].description = await this.description
			}
			fs.writeFile(path.join(__dirname,'..','data','courses.json'),JSON.stringify(updateCourses,null,4),err => {
				console.log(err)
			})
		})
	}
	static deleteCourse(id) {
		readFileCourses(courses => {
			const updateCourses = courses.filter(course => {
				return course.id != id
			})
			fs.writeFile(path.join(__dirname,'..','data','courses.json'),JSON.stringify(updateCourses,null,4),err => {
				console.log(err)
			})
		})
	}
}

module.exports = Courses