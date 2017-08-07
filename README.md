# Command Line Todo List with Database

## Description

Write a command line script called `tasks` that allows the user to manage a list
of tasks from the terminal.

Your `tasks` command should support the following sub-commands:

| command  | description                                            | example usage                       |
|----------|--------------------------------------------------------|-------------------------------------|
| add      | adds the specified task                                | ./task.js add Finish reading Flatland |
| list     | lists the incomplete tasks                             | ./task.js list                        |
| complete | marks the task with `id` equal to `<task-id>` complete | ./task.js complete `<task-id>`        |
| delete   | deleted the specified task                             | ./task.js delete `<task-id>`          |

## Specs

- Your command should be called `tasks`
- The `tasks` command file should have a shebang pointing to `node`
- The `tasks` command file should have execute permissions
- The `list` command is implemented in `./commands/list.js`
- The `add` command is implemented in `./commands/add.js`
- The `complete` command is implemented in `./commands/complete.js`
- The `delete` command is implemented in `./commands/delete.js`
- Add tests using Mocha and Chai for all functions
- User receives an error message if they enter an invalid command
- Tasks are persisted in a Postgres database
- The schema for the database exists in ./schema.sql
- Your package.json contains scripts to setup the database
- A separate test database exists for your tests
- All SQL functions are tested with mocha and chai


## Example Usage

##### Listing tasks when you have no tasks

```bash
$ ./task.js list

ID Description
-- -----------

You have 0 tasks
```

##### Adding some tasks

```
$ ./task.js add "Buy milk"
Created task 1
```

```
$ ./task.js add "Buy eggs"
Created task 2
```

```
$ ./task.js add "Bake a cake"
Created task 3
```

```
$ ./task.js add "Put groceries in the fridge"
Created task 4
```

##### Listing tasks when you have some

```bash
$ ./task.js list

ID Description
-- -----------
1  Buy milk
2  Buy eggs
3  Bake cake
4  Put groceries in the fridge

You have 4 tasks
```

##### Completing a task

```
$ ./task.js complete 1
Completed task 1: 'Buy milk'
```

##### Deleting a task

```
$ ./task.js delete 2
Deleted task 2: 'Buy eggs'
```

##### Listing after completing and/or deleteing tasks

```bash
$ ./task.js list

ID Description
-- -----------
3  Bake cake
4  Put groceries in the fridge

You have 4 tasks
```
