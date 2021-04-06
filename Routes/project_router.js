const express = require('express')

const ProjectCtrl = require('../Controllers/project_controller')

const router = express.Router()

router.post('/project', ProjectCtrl.createProject)
router.put('/project/:id', ProjectCtrl.updateProject)
router.delete('/project/:id', ProjectCtrl.deleteProject)
router.get('/project/:id', ProjectCtrl.getProjectById)
router.get('/projects', ProjectCtrl.getProjects)

module.exports = router