 const Student = require('./student')
 module.exports = class School {
    constructor(name, programs, tuition, vacancy) {
        this.name = name
        this.programs = programs
        this.tuition = tuition
        this.vacancy = vacancy
        this.studentsAccepted = []
    }

    accept(student) {
        if (this.vacancy > 0){
            this.student = student
            this.studentsAccepted.push(student)
            console.log(this.name+' accepted '+ student.name+'.')
            // student.schoolsAccepted.push(student)
            this.vacancy -= 1
            console.log(this.name+' has '+ this.vacancy+' vacancy.')
        } else {
            console.log(this.name+' does not have vacancy anymore.')
        }
            
    }
}