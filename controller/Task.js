import { ErrorHandle } from '../ErrorHandle.js';
import Task from '../model/task.js'
export let CreateTask = async (req,res,next) => {
    try {
        let {name} = req.body;
        if(!name) return next(ErrorHandle(403,'please fill the fields!'))
        let TaskFound = await Task.findOne({name : name});
        if(TaskFound) return next(ErrorHandle(401,'Task Exist!'))
        let CreatedTask = await Task.create(req.body);
        res.status(200).json(CreatedTask)
    } catch (error) {
        next(error)
    }
}
export let EditTask = async (req,res,next) => {
    try {
        let id = req.params.id;
        let UpdateTask = await Task.findByIdAndUpdate(id,{
            $set : req.body
        },{ new  : true })
        res.status(200).json('Task updated successfully');
    } catch (error) {
        next(error)
    }
}
export let DeleteTask = async (req,res,next) => {
    try {
         let id = req.params.id;
        await Task.findByIdAndDelete(id);
        res.status(200).json('Task Deleted Successfully')
    } catch (error) {
        next(error)
    }
}
export let SingleTask = async (req,res,next) => {
    try {
        let singleTask = await Task.findById(req.params.id);
        res.status(200).json(singleTask)
    } catch (error) {
        next(error)
    }
}
export let AllTask = async (req,res,next) => {
    try {
        let allTasks = await Task.find({});
        res.status(200).json(allTasks)
    } catch (error) {
        next(error)
    }
} 