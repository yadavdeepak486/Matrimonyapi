const express = require('express');
const app = express();
require("dotenv").config()
const mongoose = require("mongoose");
const cors = require('cors')
const https = require('https');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//Middleware
// const user = require('./routes/userSignup')
const caste = require('./routes/caste')
const user = require('./routes/user')
const religion = require('./routes/religion')
const country = require('./routes/country')
const state = require('./routes/state')
const city = require('./routes/city')
const staff = require('./routes/staff')
const profilefor = require('./routes/profilefor')
const familyvalues = require('./routes/familyvalues');
const familystatus = require('./routes/familystatus');
const maritalstatus = require('./routes/maritalstatus');
const profileview = require('./routes/profileview');
const bug = require('./routes/bug')
const report = require('./routes/report');
const education = require('./routes/education')
const occupation = require('./routes/occupation')
const star = require('./routes/star')
const moonsign = require('./routes/moonsign')
const height = require('./routes/height')
const employedin = require('./routes/employedin')



//Use
// app.use('/api',user)
app.use('/api', caste)
app.use('/api', user)
app.use('/api', religion)
app.use('/api', country)
app.use('/api', state)
app.use('/api', city)
app.use('/api', staff)
app.use('/api', profilefor)
app.use('/api', familyvalues)
app.use('/api', familystatus)
app.use('/api', maritalstatus)
app.use('/api', profileview)
app.use('/api', bug)
app.use('/api', report)
app.use('/api', education)
app.use('/api', occupation)
app.use('/api', star)
app.use('/api', moonsign)
app.use('/api', height)
app.use('/api', employedin)

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB connected")
}).catch((error) => {
    console.log(error)
})


app.listen(4545 || process.env.PORT, () => {
    console.log('Example app listening on port 4545!');
});


// https.createServer('/', function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
// }).listen(4000);