/*
//1. Array.of(e1[,......],[en]);
console.log('Array.of(7):= ', Array.of(7));//[7]
console.log('Array.of() := ', Array.of());//[]
console.log('Array.of(undefined) := ', Array.of(undefined));//[undefined]
console.log('Array.of(7,6,5,4) := ', Array.of(7, 6, 5, 4));//[7,6,5,4]
console.log('new Array(7) := ', new Array(7));//[,,,,,,,] means 7 empty items
let arr = [1, 2, 3, 4, 5];
console.log('Array.of(arr) := ', Array.of(arr));//[ [ 1, 2, 3, 4, 5 ] ]
console.log('Array.of(...arr) := ', Array.of(...arr));//[ 1, 2, 3, 4, 5 ]
console.log('Array.of("uma mahesh") := ', Array.of('uma mahesh'));//[ 'uma mahesh' ]
*/
//2. Array.from(iterableObject)

const arr2 = [1, 2, 3, 3, 4];// here 3 is two times
console.log(Array.from(arr2));//[1,2,3,3,4]
//Array from a String
console.log(Array.from('Uma Mahesh'));//[ 'U', 'm', 'a', ' ', 'M', 'a', 'h', 'e', 's', 'h' ]
console.log(Array.from(12345));//[]
////Array from a Set
const set1 = new Set(['Uma Mahesh', 100, Date()]);
console.log(Array.from(set1));//[ 'Uma Mahesh',100,'Wed Nov 15 2017 07:48:17 GMT+0530 (India Standard Time)' ]

const set2 = new Set([1, 2, 3, 4, 3]);//create new array with unique elements
console.log(Array.from(set2));//[1,2,3,4]

//Array from a Map
const map1 = new Map([[1, 2], [2, 3], [3, 4], [4, 5]]);
console.log(Array.from(map1));

function name1() {
    console.log(Array.from(arguments));//[1,2,3,4,5]
}
name1(1, 2, 3, 4, 5);