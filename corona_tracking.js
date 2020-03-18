Patient = class {
    constructor(name, age, coronaPositive, location, countriesVisited=[] ) {
        this.name = name
        this.age = age
        this.coronaPositive = coronaPositive
        this.location = location
        this.countriesVisited = []
        this.peopleContacted = []
        this.hospitalsVisited = []
        
    }

    contact(friend) {
        this.peopleContacted.push(name)

        if (this.coronaPositive === true || this.coronaPositive === null) {
            console.log("\nWarning!!! " + this.name + " is Covid-19 positive. "+  friend.name + " could also be infected by Covid-19\n" )
        }
    }

}



Hospital = class {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.patients = []
        this.capacityOfBed = 1000
    }

    accept(patient) {
        this.patients.push(name)
        this.capacityOfBed - 1
        patient.hospitalsVisited.push(this.name)

    }

    discharge(patient) {
        this.capacityOfBed + 1
        patient.coronaPositive = false
    }
}


//PATIENTS

jim = new Patient("Jim Dinoa", 29, true, "Turkey", null )
jack = new Patient("Jack London", 33, null, "Russia", null)
ahmet = new Patient("Ahmet Alkin", 33, null, "Turkey", ["Russia"])
zeynep = new Patient("Zeynep Gul", 78, true, "Turkey", ["China", "Israel"])
sena = new Patient("Sena Cetin", 88, null, "Turkey", null)


//PATIENTS WHO CONTACTED OTHERS AND THE PEOPLE CONTACTED

jim.contact(jack)


//ACTIVE CORONA HOSPITALS IN TURKEY
ankaraCityHospital = new Hospital("City Hospital of Ankara", "Ankara")
kayseriCityHospital  = new Hospital("City Hospital of Kayseri", "Kayseri")
gaziUniversityMedicalFaculty = new Hospital("Gazi University Faculty of Medicine", "Ankara")
capaMedicalFaculty = new Hospital("Capa Faculty of Medicine", "Istanbul")


//DAILY HEALTH-RELATED ACTIVITIES

ankaraCityHospital.accept(jim)
ankaraCityHospital.accept(ahmet)

gaziUniversityMedicalFaculty.accept(ahmet)
gaziUniversityMedicalFaculty.accept(jim)

capaMedicalFaculty.accept(zeynep)

gaziUniversityMedicalFaculty.discharge(ahmet)
ankaraCityHospital.discharge(jim)

ankaraCityHospital.accept(sena)
