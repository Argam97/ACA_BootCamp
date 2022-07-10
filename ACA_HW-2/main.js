/*
// 1) Make an array of numbers that are doubles of the first array


function doubleNumbers(arr){
    // return arr.map(item => item *2);
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
*/

/*
// 2) Take an array of numbers and make them strings

function stringItUp(arr){
    return arr.map((item) => item + "");
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
*/

/*
// 3) Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase() )
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

// 4) Make an array of strings of the names

/*
function namesOnly(arr){
    //version-1
    // let names = [];
    // for (let key of arr) {
        //     names.push(key.name);
        // }
        // return names
        
        //version-2
        return arr.map(item => item.name)
        
    }
    
    console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];
*/

/*
// 5) Make an array of strings of the names saying whether or
// not they can go to The Matrix


function makeStrings(arr){
    
    return arr.map(prev => prev.age < 18 ? prev.name + " is under age!!a" : prev.name + " can go to The Matrix")
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// under age means not 18 +;

*/

/*
/ 6)  If the given input is an array of numbers, return the sum of
//  all the positives ones. If the array is empty or there aren't
//  any positive numbers, return 0.
// const input = [ 1, -4, 12, 0, -3, 29, -150];  //   42

function sumOfItems(arr) {
    return arr.reduce((curent, item) => (item > 0 ? curent + item : curent), 0);
}

console.log(sumOfItems([1, -4, 12, 0, -3, 29, -150]));
*/

/*

/ 7) Find the difference in age between the oldest and youngest family members,
// and return their respective ages and the age difference.

// Output ->  [13, 67, 54];
const input7 = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];


function yongestMember(arr) {
    let min ;
    let max ;
    let result = arr.reduce((prev,curent) => {
        prev.push(curent.age)
        return prev
    },[])
    min = Math.min(...result);
    max = Math.max(...result);
    return [min,max,max-min]
}

console.log(yongestMember(input7));
*/
/*
// 8 )
// Count the occurrences of distinct elements in the given 2D array.
// The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of
// their occurrences.
// const output8 = {a: 1,b: 1,c: 2,d: 2,f: 2,g: 1,};


const input8 = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];

function replyedItems(arr) {
    let array = arr.flat()
    
    let result = array.reduce((prev,cur) =>{ 
        
        console.log(prev,cur);
        prev[cur] = prev[cur] ? prev[cur]+1 : 1;
        
        return prev
    },{})
    return result 
};
console.log(replyedItems(input8));
*/

/*
// 9)


// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// NOTE if the n / 2 is for example 3.5 you can assume that the
//  majority elements appears not 3.5 times but 4 times

let array = [1,1,2,1,2,2,1,2,2]

function itemCounts(arr) {

    let res =  arr.reduce((prev,curr) => {
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1
        return prev         
    },{})
    console.log(res);
    for ( let key in res) {
        console.log();
        if (res[key] > Math.floor((array.length / 2))) return key
    }

/*
// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;
let arr = [1, 1, 2, 2, 3, 1, 3, 4, 3, 3, 5,2];
// let arr = [1,1,2,2,3,3]
// function bigerItem(arr,big=0) {
//     let res = arr.reduce((prev, curr) => {
//         prev[curr] = prev[curr] ? prev[curr] + 1 : 1;

//         return prev;
//     }, {});

//     let array = Object.entries(res);
//     let sorted = array.sort((a, b) => b[1] - a[1]);
//     console.log(sorted);
//     return sorted[big-1];
// }
// console.log(bigerItem(arr,3));
*/

/*
// 11) Given a string s and an array of strings words,
// determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made
// by concatenating the first k strings in words for some
// positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

// Output: true
// Explanation:
// s can be made by concatenating "i", "love",
// and "leetcode" together.


let Input = "iloveleetcode";
let words = ["i", "love", "leetcode", "apples"];

function compairArr(Input, words) {
    let word = words.join("") ;
    return word.includes(Input);
}
console.log(compairArr(Input, words));
*/

// 12) Given an array of objects where objects have the following structure return an array of objects also containing
//     a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
// first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
// you will need to make the names uppercase,
// also there may or may not be a field relation which will be a string representing the name of one of the objects in the array
// you will need to replace that string with a reference to that actual object
// You will need to return

// const arrOfObjects = [
//     {
//         name: 'SARAH',
//         age: 32,
//         phoneNumber: '+374000000',
//         country: 'Armenia',
//         relation: referancetoSarahObject,
//     },
//     {
//         name: 'NELLY',
//         age: 11,
//         phoneNumber: '+3750020000',
//         country: 'Somali',
//         relation: referanceToNellyObject,

//     }
// ];

//     console.log(arrOfObjects);
///

// const phoneCountryCodes = {
//     "+374": "Armenia",
//     "+375": "Somali",
//     "+376": "Russia",
//     "+377": "Hoktemberyan",
// };

// const arrOfObjects = [
//     {
//         name: "sarah",
//         age: 32,
//         phoneNumber: "+374000000",
//         relation: "nelly",
//     },
//     {
//         name: "nelly",
//         age: 11,
//         phoneNumber: "+3750020000",
//         relation: "sarah",
//     },
// ];

// const referancetoSarahObject = arrOfObjects[0];
// const referanceToNellyObject = arrOfObjects[1];

// function compairItem(arr, obj) {
//     for (let key in obj) {
//         arr.forEach(function (keys) {
//             if (keys.phoneNumber.startsWith(key)) {
//                 keys.country = obj[key];
//                 keys.name = keys.name.toUpperCase();
//             }
//         });

//         arr[0].relation = `referance to
//         ${referanceToNellyObject.name} object`;
//         arr[1].relation = `referance to
//         ${referancetoSarahObject.name} object`;
//     }
//     return arr;
// }

// console.log(compairItem(arrOfObjects, phoneCountryCodes));

// let object = {
//     name: "g",
//     func: x,
// };

// function x() {
//     console.log(this);
//     function z() {
//         console.log(this);
//         let arrow =() => {
//             console.log(this);
//         };
//     };
// };

// object.func();
