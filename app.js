const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/db')
const not_found = require('./middleware/not_found')
const error = require('./middleware/errorHandler')
require('dotenv').config()

port =3000

app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks',tasks)
app.use(not_found)
app.use(error)


app.get('/', (req,res) => {
    res.send('Hello this is the Task Manager App')
})

app.post('/post', (req,res) => {
    console.log(req.body)
    res.status(201).json(req.body)
})

const start = async () => {
    try {
        await connectDB(process.env.dataBase)
        app.listen(port, console.log(`Server is listenning at port ${port}`))
    } catch (error) {
        throw error
    }
}

start()

