const School = require('./school')
module.exports = class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
        // this.schoolsAccepted = []
    }

    apply(school) {
        // this.schoolsApplied.push(school.name)
        console.log(this.name+ ' applied to '+ school.name)
    }
}
