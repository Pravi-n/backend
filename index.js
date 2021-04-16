const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const port = 3005;
//provide schema for dataBase
const projectsRouter = require('./routes/project_router');
const logsRouter = require('./Routes/log_router')


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());//help to communicate with api which we build eg. all react code is like a api for us now

mongoose.connect("mongodb://localhost/projects",{
	 useNewUrlParser: true,
	 useUnifiedTopology: true,
}).then(()=>{
	console.log("connected!")
}).catch((err)=>{
	console.log("error occure"+ error);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', projectsRouter)
app.use('/log', logsRouter)

app.listen(port, ()=>{
	console.log("server is runing on "+port);
})