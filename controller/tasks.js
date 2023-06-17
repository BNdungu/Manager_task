const model = require('../models/task')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper( async (req,res) => {
        let tasks = await model.find({})
        res.status(200).json({tasks})
})

const createTask = asyncWrapper(async (req,res) => {
    let task = await model.create(req.body)
    res.status(201).json({task})  
})
const getTask = asyncWrapper(async (req,res) => {
        const {id:taskId} = req.params
        const task = await model.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({msg: `Couldn't find task with ID ${taskId}`})
        }

        res.status(200).json({task})
})

const updateTask = asyncWrapper(async (req,res) => {
        const {id: taskId} = req.params
        const task = await model.findByIdAndUpdate({_id: taskId},req.body,{
            runValidators: true,
            new: true
        })
        if(!task){
            return res.status(404).json({msg: `Task of ID ${taskId} does not exist`})
        }
        res.status(200).json({task})
})

const deleteTask = asyncWrapper(async (req,res) => {
        const {id: taskId} = req.params
        const task = await model.findOneAndDelete({_id: taskId})
        if(!task){
            return res.status(404).json({msg: `Task ${taskId} is invalid`})
        }
        res.status(200).json({task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}