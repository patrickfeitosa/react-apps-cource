const Todo = require('./todo.js');

Todo.methods(['get', 'put', 'post', 'delete']);
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;