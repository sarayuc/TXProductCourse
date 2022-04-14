// how to define an object

var burger = {

    buns: "sesame",
    cheeseSlices: 2,
    pickles: true,
    tomato: true,
    patties: 1

}

var course = {

    subject: "Javascript",
    location: "GDC 6.302",
    instructors: "TPEO",
    startTime:6,
    endTime: 7

}

// ^^ defining key value pairs explicitly
// want to create objects that have muliple types

// want large collections of cobjects that each have
// the saem properties

// constructors: function that allows us to create objects
// of the same type quickly

/* function ObjectType (property1, ..., propertyN) {
    this.property1 = property1;
    ...
    this.propertyN = propertyN;
}
*/

function GroceryItem (name, price, inventory) {
    this.name - name;
    this.price = price;
    this.inventory = inventory;
}

// creating a GrocertyItem object
// new keyword lets the .. know that you're instantiating a new object
var apple = new GroceryItem("apple", 0.50, 90)

// predefined javacript objects: array, date, math, string, function
