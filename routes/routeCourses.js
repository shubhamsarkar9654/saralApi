'use strict'	

const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

router.route('/courses')
	.get(courseController.allCourses)

router.route('/course')
	.post(courseController.postCourse)

router.route('/course/:courseid')
	.get(courseController.getCourse)
	.put(courseController.putCourse)
	.delete(courseController.deleteCourse)

module.exports = router