const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: [true, 'Please enter a valid name option'],
        trim: true,
        maxlength: [20, 'Name cannot exceed 20 characters']

    },
    'completed': {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('New_tasks', taskSchema)