/*
Create a constructor for a Car object. Each Car object should contain the following 
properties: model, year, color, and mpg. Use the constructor to create 3 different 
Car objects. Print out the mpg of each car to the console.
*/

function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;

}

var jetta = new Car ("Volkswagen Jetta", 2019, "Gray", 35);
var murano = new Car ("Nissan Murano", 2018, "Silver", 24.3);
var wrangler = new Car ("Jeep Wrangler", 2021, "Green", 20);
console.log(jetta.mpg);
console.log(murano.mpg);
console.log(wrangler.mpg);

/*
Create a constructor for a Vehicle object. Each Vehicle object should contain 
only one property: car. Using the 3 Car objects you created previously, create 3 
Vehicle objects. Print out the mpg of the car property in each Vehicle object.
*/

function Vehicle (car) {
    this.car = car;
}

var jettaVehicle = new Vehicle (jetta);
var muranoVehicle = new Vehicle (murano);
var wranglerVehicle = new Vehicle (wrangler);