
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/db')
const not_found = require('./middleware/not_found')
const error = require('./middleware/errorHandler')
require('dotenv').config()

port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks',tasks)
app.use(not_found)
app.use(error)

const start = async () => {
    try {
        await connectDB(process.env.dataBase)
        app.listen(port, console.log(`Server is listenning at port ${port}`))
    } catch (error) {
        throw error
    }
}

start()

