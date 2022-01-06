// const http = require('http')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//routes
const admin = require('./routes/admin')
const rootDirectory = require('./util/path')


const app = express()

//middleware
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public'))) //serve files statically
app.use('/',admin)




const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))

