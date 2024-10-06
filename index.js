const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.objectId;

const User = new Schema({
    email: String,
    password: String,
    username: String
})

const Todo = new Schema({
    userId: objectId,
    title: String,
    done: Boolean,
})

const userModel = mongoose.model('users', User)
const todoModel = mongoose.model('todos', Todo)

module.exports={
    userModel:userModel,
    todoModel:todoModel
}