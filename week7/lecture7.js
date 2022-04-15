// updating property values of an object

var broccoli = {

    name: "broccoli",

	price: 2.00,

	inventory: 30

};

broccoli.price = 2.50;
broccoli.inventory += 50;

// what if i wanted to add a new property?
// objectName.newPropertyName = newValue

broccoli.brand = "Broccoli Inc."

// undefined comes up when you access data that's not there
// u also can't access properties that haven't been added to the object yet

/*
objects inherit their default properties from prototypes,
think of prototypes as the equivalent of paretns for objects
*/

var vehicles = {
    numWheels: 4
};

var car = {
    mpg: 33.3
};

car.__proto__ = vehicles;
console.log(car.numWheels)

///////////////////////////////////////////
/*

var animal = {
    eats: true,
    sleep: function() {
        console.log("I am sleeping.");
    }
};

var dog = {
    bark: bark()
};

*/