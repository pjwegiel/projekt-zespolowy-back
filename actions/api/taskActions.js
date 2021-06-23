const Task = require('../../db/models/task');

class TaskActions {

    async getTasks(req, res){
        const doc = await Task.find({});
        res.status(200).json(doc);
    }

    async getTask(req, res){
        const id = req.params.id;
        const task = await Task.findOne({_id: id});
        res.status(200).json(task);
    }

    async updateTask(req, res){
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;
        
        const task = await Task.findOne({_id: id});
        task.title = title;
        task.body = body;

        res.status(201).json(task);
    }

    async deleteTask(req, res){
        const id = req.params.id;
        await Task.deleteOne({_id: id});
        res.sendStatus(204);
    }

    async saveTask(req, res){
        const title = req.body.title;
        const body = req.body.body;

        let task;

        try {
            task = new Task({ title, body });
            await task.save();
        } catch (err) {
            return res.status(422).json({ message: err.message })
        };
        
        
        res.status(201).json(task);
    } 

};

module.exports = new TaskActions();