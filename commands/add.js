const fs = require('fs')
const readTasks = require('../readTasks.js')

const add = (newTask) => {
  readTasks((tasks) => {
    if (!newTask) {
      console.warn("Please add a task name")
      return
    }
    let toDo = {}
    const id = () => tasks.length !== 0 ? tasks[tasks.length - 1].id + 1 : 1
    toDo.id = id()
    toDo.task = newTask
    tasks.push(toDo)
    console.log(`Created task ${toDo.id}.`)
    fs.writeFile('./tasks.json', JSON.stringify(tasks), (err) => {
      if (err) throw err;
    })
  })
}

module.exports = add
