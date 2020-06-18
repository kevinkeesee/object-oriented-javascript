//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
    constructor(purpose){
        this.purpose = purpose;
    }

    explain(){
        console.log(this.purpose);
    }

    pieces(){
        console.log('The vital parts of a class include a constructor function, its properties, and methods to influence its properties and more.');
    }
}

const newWhyClass = new WhyClass('Classes exist for encapsulation of values, abstraction of their attributes, inheritance from other classes, and polymorphism to represent different values');
newWhyClass.explain();
newWhyClass.pieces();


/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...
class AmazonAnimal {
    constructor(name, bioClass, length){
        this.name = name;
        this.bioClass = bioClass;
        this.length = length;
    }
}

class Capybara extends AmazonAnimal {
    eatGrass(){
        console.log('Ate almost 8 pounds of grass today!');
    }

    congregate(){
        console.log('Joined with almost 100 other capybaras!')
    }
}

const capy = new Capybara('Capybara', 'Mammal', '4 feet');


class Marmoset extends AmazonAnimal {
    scavenge(){
        console.log('Found some delicious tree sap, insects, and fruit!');
    }

    hide(){
        console.log('Ducked out of sight from nosy humans.');
    }
}

const marmo = new Marmoset('Pygmy Marmoset', 'Mammal', '5 inches');


class Macaw extends AmazonAnimal {
    soar(){
        console.log('Flying far above the canopies!');
    }

    eatNut(){
        console.log('Broke a coconut with my giant curved beak!');
    }
}

const macaw = new Macaw('Hyacinth Macaw', 'Bird', '3 feet');


class Toucan extends AmazonAnimal {
    socialize(){
        console.log('Flew with a few other toucans at sunset.');
    }

    findFood(){
        console.log('Found all sorts of tasty treats, ranging from insects, fruit, reptiles, and even eggs!');
    }
}

const toucan = new Toucan('Toco Toucan', 'Bird', '20 inches');


class Anaconda extends AmazonAnimal {
    consumePrey(){
        console.log('Wrapped around a capybara and swallowed it whole.');
    }

    relax(){
        console.log('Found a nice body of water to relax next to.');
    }
}

const anaconda = new Anaconda('Green Anaconda', 'Reptile', '15 feet');


class Turtle extends AmazonAnimal {
    scavenge(){
        console.log('Found some tasty leaves and fish!');
    }

    rest(){
        console.log('Took a nap in the sun while tucked into my shell.');
    }
}

const turtle = new Turtle('South American River Turtle', 'Reptile', '3 feet');



/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    //your code here...
    constructor(sides){
        this.sides = sides; //lengths of each side
    }
}


class Triangle extends Shape {
    base = this.sides[0];
    height = null; //determine this height using basic geometry.  You may need to research this one.

    calcArea() {
        console.log(`${this.constructor.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    }

    calcPerimeter() {
        console.log(`${this.constructor.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
    }
}

const triangle = new Triangle([4,7,7]);

triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
triangle.height = Math.sqrt(Math.pow(triangle.sides[1], 2) - Math.pow((triangle.base / 2), 2)); //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

class Rectangle extends Shape {
    length = 2;
    width = 5;

    calcArea() {
        console.log(`${this.constructor.name}'s area is calculated to be : ${this.length * this.width}`);
    }

    calcPerimeter() {
        console.log(`${this.constructor.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
    }
}

const rectangle = new Rectangle(4);

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

class Circle extends Shape {
    radius = 5;

    calcArea() {
        console.log(`${this.constructor.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
    }

    calcCircumference() {
        console.log(`${this.constructor.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

const circle = new Circle(1);

console.log(circle);
circle.calcCircumference();
circle.calcArea();


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
    name;
    planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name,num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Earth('earth',3);
console.log(earth);




