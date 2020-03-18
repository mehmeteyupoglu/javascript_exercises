Person = class {

    //This constructor function defines a member's name, school, age and the book-related activities
    constructor(name, age, school) {
        this.name = name 
        this.age = age 
        this.school = school
        this.booksInProgress = []
        this.booksRead = []

    }

    //This borrow and turn functions print a member's book-related activities and it passes the information to the Library class as well. 
    borrow (book, library, date) {
        this.booksInProgress.push(book)
        library.members.push(this.name)
        library.booksGiven.push(book)
        console.log(this.name + " borrowed " + "'"+ book + "'" + " in " + date + " from " + library.name + ".")
        library.bookMember.push(this.name)
    }

    turn (book, library, date) {
        this.booksInProgress.pop(book)

        //When a member turns a book, the system recognizes that the member read the book he borrowed. 
        this.booksRead.push(book)
        library.booksGiven.pop(book)
        console.log(this.name + " turned " + "'"+ book + "'" + " in " + date + " to " + library.name + ".") 

    }

}

Library = class {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.booksGiven = []
        this.bookMember = []
        this.members = []
    }

    
}
milliKutuphane = new Library("Milli Kütüphane", "Ankara")
beyazit = new Library("Beyazıt Kütüphanesi", "İstanbul")

mehmet = new Person("Mehmet", 28, "Istanbul Technical University")
sena = new Person("Sena", 27, "Gazi University")


sena.borrow("Reader at Work", milliKutuphane, "22/10/2019")
sena.borrow("More to Read", beyazit, "22/12/2019")
mehmet.borrow("Sapiens", milliKutuphane, "05/05/2019")
mehmet.borrow("Little Prince", milliKutuphane, "05/10/2019")

mehmet.turn("Little Prince", milliKutuphane, "08/11/2019" )
