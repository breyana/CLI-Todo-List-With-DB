const { addToDatabase } = require('../db')

const add = (newTask) => {
  if (!newTask) {
    console.warn("Please add a task name")
    return
  }
  addToDatabase(newTask)
}

module.exports = add
