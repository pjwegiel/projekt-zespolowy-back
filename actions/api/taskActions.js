const Task = require('../../db/models/task');

class TaskActions {
    getTasks(req, res){
        res.send('api działa');
    }
    getTask(req, res){
        res.send('info');
    }
    updateTask(req, res){
        res.send('zaktualizowane');
    }
    deleteTask(req, res){
        const id = req.params.id;
        res.send('usunięte, id:' + id);
    }
    saveTask(req, res){
        const title = req.body.title;
        const body = req.body.body;
        res.send('stworzona. tytuł: ' + title + 'treść: ' + body);
    } 
};

module.exports = new TaskActions();