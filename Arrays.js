//1. Array.of(e1[,......],[en]);
console.log('Array.of(7):= ', Array.of(7));//[7]
console.log('Array.of() := ', Array.of());//[]
console.log('Array.of(undefined) := ', Array.of(undefined));//[undefined]
console.log('Array.of(7,6,5,4) := ', Array.of(7, 6, 5, 4));//[7,6,5,4]
console.log('new Array(7) := ', new Array(7));//[,,,,,,,] means 7 empty items
let arr = [1, 2, 3, 4, 5];
console.log('Array.of(arr) := ', Array.of(arr));//[ [ 1, 2, 3, 4, 5 ] ]
console.log('Array.of(...arr) := ', Array.of(...arr));//[ 1, 2, 3, 4, 5 ]
console.log('Array.of("uma mahesh") := ', Array.of('uma mahesh'));//[ 1, 2, 3, 4, 5 ]
