/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 
*/
    //your code here...
class Book{
    constructor(author, publisher){
        this.#author = author;
        this.#publisher = publisher;
    }

    info(){
        console.log(`This book was written by ${this.#author} and published by ${this.#publisher}`);
    }

    setAuthor(author){
        this.#author = author;
    }

    setPublisher(publisher){
        this.#publisher = publisher;
    }
}
const book1 = new Book('John Hughes', 'Scholastic');

class Author{
    constructor(name, books){
        this.#name = name;
        this.#books = books;
    }

    bookList(){
        console.log(`${this.#name} wrote ${this.#books}`);
    }

    setName(name){
        this.#name = name;
    }

    addBook(book){
        this.#books.push(book);
    }
}
const author1 = new Author('John Hughes', ['Home Alone', 'The Breakfast Club']);

class Publisher{
    constructor(authors, books){
        this.#authors = authors;
        this.#books = books;
    }

    lists(){
        console.log(`Authors: ${this.#authors}`);
        console.log(`Books: ${this.#books}`);
    }

    addAuthor(author){
        this.#authors.push(author);
    }

    addBook(book){
        this.#books.push(book);
    }
}
const scholastic = new Publisher(['John Hughes', 'Suzanne Collins'], ['Home Alone', 'The Ballad Of Songbirds And Snakes']);

class Review{
    constructor(user, num, text){
        this.#user = user;
        this.#rating = [num, text];
    }

    display(){
        console.log(`User ${this.#user} gave this book a ${this.#rating[0]} out of 10, saying: ${this.#rating[1]}`);
    }

    changeUser(user){
        this.#user = user;
    }

    changeRating(number){
        this.#rating[0] = number;
    }

    changeReview(review){
        this.#rating[1] = review;
    }
}
const review1 = new Review('Bella', 10, 'This is a must read, and will both challenge your thoughts on Nature vs Nurture as well as deepen your appreciation for literature.');


/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
*/

    //your code here...
let Umbrella = (function(){
    name = null;
})();

class Company extends Umbrella{
    constructor(name, empNum){
        this.#name = name;
        this.#empNum = empNum;
    }
}


class UmbrellaUSA extends Company{
    
}

class ArklayLaboratory extends Company{
    constructor(){
        this.#compName = 'Umbrella USA';
        this.#location = 'Raccoon Forest, USA';
    }
}

class NEST extends Company{
    constructor(){
        this.#compName = 'Umbrella USA';
        this.#location = 'Raccoon City, USA';
    }
}

class NEST2 extends Company{
    constructor(){
        this.#compName = 'Umbrella USA';
        this.#location = 'Raccoon City, USA';
    }
}


class UmbrellaEurope extends Company{

}

class No6Laboratory extends Company{
    constructor(){
        this.#compName = 'Umbrella Europe';
        this.#location = 'Classified';
    }
}

class ParisLaboratory extends Company{
    constructor(){
        this.#compName = 'Umbrella Europe';
        this.#location = 'Paris, France';
    }
}

class NemesisLaboratory extends Company{
    constructor(){
        this.#compName = 'Umbrella Europe';
        this.#location = 'Classified';
    }
}


class UmbrellaPharmacuticals extends Company{
    
}

class Employee {
    constructor(name, title, salary){
        this.#name = name;
        this.#title = title;
        this.#salary = salary;
    }
}

const ceo = new Employee('Spencer, Ozwell E.', 'CEO of Umbrella Pharmaceuticals', '800K');
const manager = new Employee('Arving, Keith', 'Room Manager', '300K');
const secretary = new Employee('Coleman, Charles', 'Chief Secretary', '200K');
const engineer1 = new Employee('Turner, David', 'Engineer', '150K');
const engineer2 = new Employee('Earle, Eric', 'Engineer', '150K');
const finOfficer = new Employee('Reyes, Marcel', 'Financial Officer', '200K');
const janitor = new Employee('Harvey, Adrian', 'Janitor', '50K');
const marketer = new Employee('Kelly, Martin', 'Marketer', '300K');
const hrPersonnel = new Employee('Chen, Bailey', 'Human Resources Personnel', '500K');
const lawyer = new Employee('Hull, Ellis', 'Lawyer', '6000K');


/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...