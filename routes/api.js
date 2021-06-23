const epxress = require('express');
// const tasks = require('../actions/api/taskActions');
const router = epxress.Router();

const taskActions = require('../actions/api/taskActions');

//endpoints

    //get tasks
router.get('/tasks', taskActions.getTasks);

    //get task
router.get('/tasks/:id', taskActions.getTask);

    //save task
router.post('/tasks', taskActions.saveTask);

    //edit task
router.put('/tasks/:id', taskActions.updateTask);

    //delete task
router.delete('/tasks/:id', taskActions.deleteTask);


module.exports = router;