"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos_1 = require("../models/todos");
var TODOS = [];
exports.createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'ok', createdTodo: newTodo });
};
