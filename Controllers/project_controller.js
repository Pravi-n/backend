const Project = require('..//project/models/project_model');
createProject = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a project',
        })
    }

    const project = new Project(body)

    if (!project) {
        return res.status(400).json({ success: false, error: err })
    }

    project
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: project._id,
                message: 'project created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'project not created!',
            })
        })
}


updateProject = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Project.findOne({ _id: req.params.id }, (err, project) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Project not found!',
            })
        }
        project.projectName = body.projectName
        project.noOfMembers = body.noOfMembers
        project.doc = body.doc
        project.noOfTeams = body.noOfTeams
        project.edoc = body.edoc
        project
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: project._id,
                    message: 'Project updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Project not updated!',
                })
            })
    })
}
deleteProject = async (req, res) => {
    await Project.findOneAndDelete({ _id: req.params.id }, (err, project) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!project) {
            return res
                .status(404)
                .json({ success: false, error: `project not found` })
        }

        return res.status(200).json({ success: true, data: project })
    }).catch(err => console.log(err))
}
getProjectById = async (req, res) => {
    await Project.findOne({ _id: req.params.id }, (err, project) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!project) {
            return res
                .status(404)
                .json({ success: false, error: `project not found` })
        }
        return res.status(200).json({ success: true, data: project })
    }).catch(err => console.log(err))
}
getProjects = async (req, res) => {
    await Project.find({}, (err, projects) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!projects.length) {
            return res
                .status(404)
                .json({ success: false, error: `project not found` })
        }
        return res.status(200).json({ success: true, data: projects })
    }).catch(err => console.log(err))
}

module.exports = {
    createProject,
    updateProject,
    deleteProject,
    getProjects,
    getProjectById,
}