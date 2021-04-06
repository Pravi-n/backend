const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {
        projectName: { type: String, required: true },
        noOfMembers: { type: Number, required: true },
        doc: { type: Date, required: true },
        noOfTeams : {type : Number, required :true},
        edoc: { type: Date, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('projects', Project)