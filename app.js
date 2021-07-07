const express = require('express');
const app = express();
require("dotenv").config()
const mongoose = require("mongoose");
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//Middleware
// const user = require('./routes/userSignup')
const caste = require('./routes/caste')
const userdetails = require('./routes/userdetails')
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



//Use
// app.use('/api',user)
app.use('/api',caste)
app.use('/api',userdetails)
app.use('/api',religion)
app.use('/api',country)
app.use('/api',state)
app.use('/api',city)
app.use('/api',staff)
app.use('/api',profilefor)
app.use('/api',familyvalues)
app.use('/api',familystatus)
app.use('/api',maritalstatus)
app.use('/api',profileview)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB CONNECTED SUCCEFULLY")
}).catch((error) => {
    console.log(error)
})


app.listen(4000 || process.env.PORT, () => {
    console.log('Example app listening on port 4000!');
});