const Student = require('./student')
const School = require('./school')
const fs = require('fs')
const Chalk = require('chalk')
const Database = require('./database')

ceyda = new Student('Ceyda Can', 20)
ziya = new Student('Ziya Kara', 19)

harvard = new School('Harvard', ['Business and Administration',  'Computer Science', 'Education'], 20000 + ' USD', 30)
ziya.apply(harvard)
harvard.accept(ziya)

ceyda.apply(harvard)
harvard.accept(ceyda)

// console.log(Chalk.bold.green.italic(ziya.name))
// console.log(Chalk.bgBlue.white.bold(harvard.name))
Database.save(ziya)
Database.save(harvard)
const loadedFile = Database.load('data.json')
console.log(loadedFile.name)


