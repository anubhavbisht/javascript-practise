/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.toDoList = []
  }
  add(todo){
    this.toDoList.push(todo)
  }
  remove(indexOfTodo){
    this.toDoList.splice(indexOfTodo, 1)
  }
  update(index, updatedTodo){
    if(index >= this.toDoList.length) return
    this.toDoList[index] = updatedTodo
  }
  getAll(){
    return this.toDoList
  }
  get(indexOfTodo){
    if(indexOfTodo >= this.toDoList.length) return null
    return this.toDoList[indexOfTodo]
  }
  clear(){
    this.toDoList = []
  }
}

module.exports = Todo;
