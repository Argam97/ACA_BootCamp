/*
// Exercise 1. University

class University {
    constructor(teachers = [], students = []) {
        this.teachers = teachers;
        this.students = students;
    }
    addMember(member) {
        if (member.role === "student") {
            this.students.push(member);
        } else if (member.role === "teacher") {
            this.teachers.push(member);
        } else {
            throw new Error("you hava error in your role");
        }
    }
    removeMember(member) {
        if (member.role === "student") {
            return this.students.forEach((item) => {
                if (item === member) {
                    this.students.splice(this.students.indexOf(member), 1);
                    console.log(this.students);
                }
            });
        }
        if (member.role === "teacher") {
            return this.teachers.forEach((item) => {
                if (item === member) {
                    this.teachers.splice(this.teachers.indexOf(member), 1);
                    console.log(this.teachers);
                }
            });
        }
    }
    startLesson() {
        this.teachers.map((item) => (item.energy -= 5));
        this.students.map((item) => (item.energy -= 2));
    }
}
class UniversityMember {
    constructor(name, age, role, energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;
    }
    info() {
        return `name => ${this.name} age => ${this.age} role => ${this.role} energy => ${this.energy} `;
    }
}
class Teacher extends UniversityMember {
    // constructor(...args) {
    //     super(...args);
    // }
}
class Student extends UniversityMember {
    // constructor(...args) {
    //     super(...args);
    // }
}

const user = new Teacher("a", "25", "teacher");
const user1 = new Teacher("b", "27", "teacher");
const user2 = new Student("c", "25", "student");
const user3 = new Student("d", "27", "student");
let x = new University();
x.addMember(user);
x.addMember(user1);
x.addMember(user2);
x.addMember(user3);
x.removeMember(user1);
x.startLesson();
console.log(x);
console.log();
*/

/*
Exercise 2. CoffeeShop

class CoffeeShop {
    constructor(menu, orders = [], name = "Narek resolt") {
        this.menu = menu;
        this.orders = orders;
        this.orderAmount = 0;
    }
    addOrders(itemName) {
        let flag = false;
        this.menu.map((item) => {
            if (item.orderName === itemName) {
                flag = true;
                this.orders.push(item);
            }
        });
        if (!flag) {
            console.log("This item is currently unavailable!");
        }
    }
    fulfillOrder() {
        if (this.orders?.length) {
            let fulFilled = this.orders.splice(0, 1);
            this.orderAmount += fulFilled[0].price;
            console.log(`The ${fulFilled[0].orderName} is ready!`);
        } else {
            console.log("All orders have been fulfilled!");
        }
    }
    listOrders() {
        if (this.orders?.length) {
            console.log(this.orders);
        } else {
            console.log(this.orders);
        }
    }
    dueAmount() {
        console.log(this.orderAmount);
    }
    cheapestItem() {
        let min = this.menu[0].price;
        
        // for(let item of this.menu){
            //     if(item.price < min ) {
                //         min = item.price
                //     }
                // }
                this.menu.map((item) => {
                    if (item.price < min) {
                min = item.price;
            }
        });
        console.log(min);
    }
    drinksOnly() {
        this.menu.map(item => {
            if(item.type === "Drink") {
                console.log(item,"Drink");
            }
        })
    }
    foodOnly() {
        this.menu.map(item => {
            if(item.type === "Food") {
                console.log(item, "Food");
            }
        })
    }
}
let menu = [
    { orderName: "Max", type: "Drink", price: 250 },
    { orderName: "Chalaxach", type: "Food", price: 2500 },
    { orderName: "Coffee", type: "Drink", price: 300 },
    { orderName: "Qyabab", type: "Food", price: 1000 },
    { orderName: "Tequila", type: "Drink", price: 2000 },
];

let order1 = new CoffeeShop(menu);

order1.addOrders("Max");
order1.addOrders("Coffee");
order1.addOrders("Chalaxach");
order1.addOrders("Chalaxach");
order1.fulfillOrder();
order1.fulfillOrder();
order1.fulfillOrder();
order1.fulfillOrder();
order1.fulfillOrder();
order1.listOrders();
order1.dueAmount();
order1.cheapestItem();
order1.drinksOnly();
order1.foodOnly();
*/

/*
Exercise 3 Abstract class

class Abstract {
    constructor() {
        this.name = "Abstract classes";
        if ((this.constructor = Abstract)) {
            throw new Error("You can not extends from this clases");
        }
    }
}

class esimInch extends Abstract {}
let z = new esimInch()
console.log(z);

*/

/*
Exercise 4.1. Class hierarchy

class Character {
    constructor(name, type, health = 100, level = 1, attack, defense) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defense = defense;
    }
    levelUp() {
        if (this.health > 0) {
            this.health = 100;
            this.level = level++;
            this.attack = (this.attack * 20) / 100;
            this.defense = (this.defense * 20) / 100;
        } else {
            throw new Error("you cannot increase the level of the deceased !!");
        }
        return `
        name => ${this.name}
        type => ${this.type}
        health => ${this.health}
        level => ${this.level}
        attack => ${this.attack}
        defense => ${this.defense}
        `;
    }
    damage(points) {
        if(this.health >= 0) {
            let point = this.health -= points * (1 - this.defense / 100)
            return point
        }
    }
}
class Bowman extends Character {
    constructor() {
        super();
        this.attack = 25;
        this.defense = 25;
    }
    levelUp () {
        return super.levelUp();
    }
    damage(points) {
        super.damage(points);
    }     
}
class Swordsman extends Character {
    constructor() {
        super();
        this.attack = 40;
        this.defense = 10;
    }
    levelUp () {
        return super.levelUp();
    }
    damage(points) {
        super.damage(points);
    }     
}
class Magician extends Character {
    constructor() {
        super();
        this.attack = 10;
        this.defense = 40;
    }
     levelUp () {
         return super.levelUp();
        }
        damage(points) {
            super.damage(points);
        }     
    }
    class Daemon extends Character {
        constructor() {
            super();
            this.attack = 10;
            this.defense = 40;
        }
        levelUp () {
            return super.levelUp();
        }
        damage(points) {
            super.damage(points);
    }     
}
class Undead extends Character {
    constructor() {
        super();
        this.attack = 25;
        this.defense = 25;
    }
    levelUp () {
        return super.levelUp();
    }
    damage(points) {
        super.damage(points);
    }     
}
class Zombie extends Character {
    constructor() {
        super();
        this.attack = 40;
        this.defense = 10;
    }
    levelUp () {
        return super.levelUp();
    }
    damage(points) {
        super.damage(points);
    }     
}

*/

/*
EXERCISE 5. OOP Structure

let buildingsName = [];
let carTypes = []
​
class City {
    constructor () {
        this.buildings = buildingsName;
    }
}
​
class Building {
    constructor () {
        this.cars = carTypes;
    }
}
​
class Hospital extends Building {
    constructor (name) {
        super();
        this.name = name;
        buildingsName.push(this);
    }
}
class PoliceDepartment extends Building {
    constructor (name) {
        super();
        this.name = name;
        buildingsName.push(this);
        
    }
}
​
class Car {
    
}
class PoliceCar extends Car {
    constructor (quantity) {
        super();
        this.policeCar = quantity;
        carTypes.push(this);
    }
}
class AmbulanceCar extends Car {
    constructor (quantity) {
        super();
        this.hospitalCar = quantity;
        carTypes.push(this);
    }
}
let vostikanutyun1 = new PoliceDepartment('Hayreniq qaxmas')
let vostikanutyun2 = new PoliceDepartment('Qnchakan')
let erebouni = new Hospital('Erebuni hospital')
let nairi = new Hospital('Nairi hospital')
let cityYerevan = new City()
​
let policeCar1 = new PoliceCar(20);
let policeCar2 = new PoliceCar(14);
let ambulanceCar1 = new AmbulanceCar(16);
let ambulanceCar2 = new AmbulanceCar(77);
let buildingsYerevan = new Building();
​
console.log(cityYerevan);
console.log(buildingsYerevan);
*/

/*
Exercise 6. TV Class

class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
    addVolume(volumeLVL) {
        if (volumeLVL < 0) {
            this.volume = 0;
        } else if (volumeLVL > 100) {
            this.volume = 100;
        } else {
            this.volume = volumeLVL;
        }
        console.log("volumeLevel =>" + this.volume);
    }
    setChanel(channelNum) {
        if (channelNum <= 50 && channelNum >= 0) {
            this.channel = channelNum;
        }
        console.log("chanel => " + this.channel);
    }
    resetTV() {
        this.channel = 1;
        this.volume = 50;
        console.log(`${this.channel} ${this.volume}`);
    }
    status() {
        console.log(
            `${this.brand} at chanel ${this.channel}, volume ${this.volume}`
            );
        }
    }
    
    let myTV = new TV("Apple", 23, 74);
    myTV.addVolume(1000);
    myTV.setChanel(1000);
    myTV.resetTV();
    myTV.addVolume(74);
    myTV.setChanel(26);
    myTV.status()
*/

// let count = {};
// let x = [];

// let cart = [
//     { name: "Tomato", type: "Vegetable", price: 500 },
//     { name: "Tomato", type: "Vegetable", price: 500 },
//     { name: "Tomato", type: "Vegetable", price: 500 },
//     { name: "Tomato", type: "Vegetable", price: 500 },
//     { name: "Tomato", type: "Vegetable", price: 500 },
//     { name: "Grape", type: "Fruit", price: 700 },
//     { name: "Grape", type: "Fruit", price: 700 },
//     { name: "Coconut", type: "Drupe", price: 1200 },
// ];

// for (let key of cart) {
//     x.push(key.name);
// }

// x.forEach((item) => {
//     count[item] = (count[item] || 0) + 1;
// });

// for(let key of x) {
//     if(count[key] > 3) {
//         delete count[key]
//     }
// }
// console.log(count);
