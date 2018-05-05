const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const api = require('./routes/api')

const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'public')))
app.use('/api',api)

app.listen(port,() => {
    console.log(`Server is live at ${port}`)
})