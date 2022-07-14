// // // 1)

// // // as you can see toyota2 does not have a logModel function
// // // borrow that function from toyota1 and call i,
// // // so it console.logs "Toyota Rav4"

/*
const toyota1 = {
    model: 'Toyota',
    type: 'Camry',
    logModel(){
        console.log(this.model, this.type);
    }
}
const toyota2 = {
    model: 'Toyota',
    type: 'Rav4',
}
toyota1.logModel.call(toyota2);
toyota2.__proto__.logModel = toyota1.logModel;
toyota2.logModel()
*/

// // // 2)
// // // The following code does not work turn it into working code

/*
const flights = {
    
    flights: [],

    priorityFlights: [],

    scheduleFlight(flight){
        this.flights.push(flight);
    },

    removeFlight(flight){
        this.flights = this.flights.filter(flightFilter.bind(this));
        function flightFilter(f){
            if (flight === f){
                return this.priorityFlights.includes(flight);
            }
            return true
        }
    },

    makePriorityFlight(flight){
        this.priorityFlights.push(flight);
    }
    
}


flights.scheduleFlight('1');

flights.makePriorityFlight('1');

flights.removeFlight('1')

console.log(flights.flights);
*/

// // // 3)

// // // CarConstructor creates cars but what if someone decides
// // to call it without new keyword,
// // // write a logic inside the CarConstructor function so
// // it checks if the CarConstructor is called without
// // // new keyword it logs "please call me with new keyword"
// // if not it creates a car
/*
function CarConstructor(model, year) {
    if(new.target) {
        this.mode = model
        this.year = year
        console.log('New ->', new.target.name);
    }
    else {
        console.log("new", model);
        return new CarConstructor(model, year)
    }
}
// console.log(new CarConstructor("merseddes", 2022));
console.log(CarConstructor('BMW', 2012));
console.log(new CarConstructor('AUDI', 2022));
*/
// // // 4)

// // // make a new array out of objArr so that every object
// // // has the same logName function that is declared below
// // // use logName function do not create your own

/*
const objArr = [
    { name: "1" }, 
    { name: "2" }, 
    { name: "3" }, 
    { name: "4" }
];

function logName() {
    console.log(this.name);
}


let newArray = objArr.map((item) => {
    item.logName = logName;
    return item;
})
console.log(newArray);

function foo(objArr) {
    let result = objArr;
    result.forEach(function(item) {
        item.logName = logName
    })
    
    return result;
}
console.log(foo(objArr));
*/
/*
// // // 5

// use foreach method and use arrayOfObjectNames
// function to log the fallowing objects names from the array;

const arrayOfObjectNames = [{ name: "1" }, { name: "2" }, { name: "3" }];

function logArrayObjectNames() {
    console.log(this.name);
}

arrayOfObjectNames.forEach(function (elem) {
    elem.log = logArrayObjectNames;
    return elem.log();
});
*/

// 6) for above mentioned arrayOfObjectNames Return an array
// of functions that when called would log each objects name
// use Array.map and logArrayObjectNames function
/*
const arrayOfObjectNames = [{ name: "1" }, { name: "2" }, { name: "3" }];

function logArrayObjectNames() {
    console.log(this.name);
    // return this;
}
const mappedFunc = arrayOfObjectNames.map(function (item) {
    item.log = logArrayObjectNames;
    console.log(item);
    item.log();
    return item.log;
});
console.log(mappedFunc);
*/
// mappedFunc.forEach(i => i()); // this would print 1, 2, 3
/*
//7 please take a look at the following

// this is just an example of object that you will still
// need to create by calling CreateCar constructor

// const exampleOfAlreadyCreatedObject = {
    //     id: 1,
    //     model: 'Toyota',
    //     year: '1996',
    //     color: 'red',
    //     driveTrain: '4x4',
    // }
    
    
    function CreateCar(id, model, year, color, driveTrain) {
        this.id = id;
        this.model = model;
        this.year = year;
        this.color = color;
        this.driveTrain = driveTrain;
    }
    
    const inventory = {
        cars: [],
        
        addCar(car) {
            this.cars.push(car);
            return this.cars;
        },
        
        removeCar(id) {
            
            let newCars = [];
            this.cars.forEach(item => {
                if (item.id !== id) {
                newCars.push(item);
            }
        })
        this.cars = newCars;
        
        this.cars.forEach((item, i) => {
            if (item.id === id) {
                this.cars.splice(i, 1);
            }
        });
    },
    
    listCars() {
        console.log(this.cars);
        
        this.cars.forEach(item => {
            console.log(item);
        })
        
    },
    
    listCarsByConditionCallback(call) {
        this.cars.forEach(function (item) {
            if (call(item)) {
                console.log(item);
            }
        }, this);
    },
};

inventory.addCar(new CreateCar(1, "Toyota", "1996", "red", "4x4"));
inventory.addCar(
    new CreateCar(2, "Mercedes", "2000", "white", "rear wheel drive")
    );
    inventory.addCar(new CreateCar(3, "BMW", "2020", "black", "rear wheel drive"));
    inventory.removeCar(2);
    inventory.listCars();
    inventory.listCarsByConditionCallback(
        (car) => car.model === "BMW" && car.year === "2020"
        );
        
        */
        // 8)
        
        // Create a constructor function called Song. Song should take
        // in two arguments, title and artist, which should both be
        // added as properties when the Song constructor function is used.
        // The Song function should also have a method called
        // play When called, the play function should console.log
// the name of that specific song preceded by the word 'Playing:'.
// NOTE that play function should be the same for all instances
// of the Song constructor
/*
function SongConstructor(title, artist) {
    this.artist = artist;
    this.title = title;
    this.play = () => {
        console.log(`playing ${this.title} ${this.artist}`);
    };
}

let a = new SongConstructor("Addel", "Love In The Dark");
a.play();
*/
// 9)

// 1. Create a folder called Workshop_4 make
// a git repository inside.
//
//
// 2. without navigating to a different branch
// create a branch named x_branch


// git@github.com:Argam97/workshop-4.git


// 10)
// 1. Make a new folder called 'Workshop_4'
//
// 2. make that folder into git repo
//
// 2. create a branch called rename_me
//
// 3. create a branch called delete_me
//
// 4. rename the branch rename_me to renamed_branch
//
// 5. delete the branch delete_me

// git@github.com:Argam97/workShop_4.git


// 11)
/*
*/
const checkKnow = {
    name: 'checkKnow',
    surname: 'surname',
    foo: {
        name: 'foo',
        logName(){
            console.log(this.surname);//    surname: 'surname',
        }
    },
    boo(){
        const obj = {
            name: 'boo method',
            check: () => {
                console.log(this.name);
            }
        }
        obj.check();
    }
}

checkKnow.foo.logName();

checkKnow.boo();
// with a few words explain why this is happening Armenian or English.
// qani vor checkKnow object e ev .foo.logName() dec. function e
// objecti scopy vorpes scop yndunum ev hajord qaylum sksum e ay 
// scopum man gal ir this => this.surname -y ev chgtnelu patjarov
// veradarcnum e undefined

// is 2 depqum qani vor boo(function)-e,
// ev nersum this e voronum check(arrow-function)-y,
// ev qani vor arrow function-y ir this parzum e ir 
// haytararman jamanak u mer depqum boo()-i mej e u nra
// thisy linum e boo(function)-i this-y isk boo(function)-i thisy
// checkKnow object-y e ev veradarcnum e objecti name-y