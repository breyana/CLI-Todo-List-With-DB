#! /usr/local/bin/node

const fs = require('fs')
const add = require('./commands/add')
const list = require('./commands/list')
const done = require('./commands/done')

const command = process.argv[2]
const argument = process.argv.slice(3).join(' ')

switch(command) {
  case "add":
    add(argument)
    break;

  case "list":
    list()
    break;

  case "done":
    done(argument)
    break;

  default:
    console.log("Invalid command, use \"add\", \"list\", or \"done\"")
}
