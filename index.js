const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
//provide schema for dataBase
const userModel = require("./models/UserData");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());//help to communicate with api which we build eg. all react code is like a api for us now

mongoose.connect("our_mongo_link",{
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

app.use('/api', movieRouter)

app.listen(port, ()=>{
	console.log("server is runing on "+port);
})