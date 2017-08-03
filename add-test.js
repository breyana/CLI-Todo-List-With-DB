const fs = require('fs')
const { expect } = require('chai')
const add = require('../commands/add')
const readTasks = require('../readTasks.js')


describe('Add', () => {
  context('Basic Functionality', () => {
    it('adds a new task to tasks.json', () => {
      add('This is a task')
      expect(readTasks().length)
        .to.eql(1)
    })
  })
})
