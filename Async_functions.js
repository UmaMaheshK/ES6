function resolveAfter2Seconds(x) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(x);
        }, 2000);
    });
}

//resolveAfter2Seconds(10).then((res) => { console.log(res); }).catch((err) => { console.log(err); });//10
async function add1(a) {
    const r1 = await resolveAfter2Seconds(20);
    const r2 = await resolveAfter2Seconds(30);
    return a + r1 + r2;
}
//add1(10).then((res) => { console.log(res); });//print 60 after 4 seconds

async function add2(a) {
    const r1 = resolveAfter2Seconds(20);
    const r2 = resolveAfter2Seconds(30);
    return a + await r1 + await r2;
}
//add2(10).then((res) => { console.log(res); });//print 60 after 4 seconds

//function expression assigned to variable
let Add = async function (x) {
    const a = resolveAfter2Seconds(20);
    const b = resolveAfter2Seconds(30);
    return x + await a + await b;
}
//Add(10).then((res) => { console.log(res); });//print 60 after 2 seconds.

// //IIFE
// //Immediately invoke function expression
// (async function (x) {
//     const a = resolveAfter2Seconds(20);
//     const b = resolveAfter2Seconds(30);
//     return x + await a + await b;
// })(10).then((res) => { console.log(res); });//print 60 after 2 seconds.

async function add3() {
    const a = await resolveAfter2Seconds(10);
    console.log(a);
}
//add3();
async function Add4() {
    const a = await 10;//convert promise reslove value
    console.log(a);
}
//Add4();
async function add5() {
    const a = await Promise.resolve(10);
    console.log(a);
}
//add5();

async function add6() {
    try {
        const a = await Promise.reject(10);
        console.log(a);//Not reached.   
    } catch (error) {
        console.log(error);
    }
}
add6();