/*//Example-1
//Callback functions: pass functions to parameter
function getData(successCall, errorHandler) {
    setTimeout(function () {
        let result = true;
        if (result) {
            successCall('You got answer!!');
        }
        else {
            errorHandler('You got error!!');
        }
    }, 2000);
}
getData(function (res) {
    console.log(res);
}, function (er) {
    console.log(er);
});
*/

/*
//Example-2 with  Promise
function getData(successCall, errorHandler) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let result = true;
            if (result) {
                resolve('You got answer !!');
            }
            else {
                reject('You got error !!');
            }
        }, 1000);
    });
    return promise;
}

getData().then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
*/

/*
//Example-3 with  Promise and errors
function getData(successCall, errorHandler) {
    var promise = new Promise(function (resolve, reject) {
        //throw new Error('Error in Promise');
        throw 'Error in Promise';
        setTimeout(function () {
            let result = true;
            if (result) {
                resolve('You got answer !!');
            }
            else {
                reject('You got error !!');
            }
        }, 1000);
    });
    return promise;
}

getData().then(function (res) {
    console.log(res);
    //throw new Error('Error in Promise.then');
    //throw 'Error in Promise.then';
}).catch(function (err) {
    console.log(err);
});
*/
/* //Example-4
new Promise((resolve, reject) => {
    throw "err";
    console.log("NEVER REACHED");
})
    .then(() => console.log("RESOLVED"))
    .catch(() => console.log("REJECTED"));//REJECTED
*/
/*
    //Example-5
new Promise((resolve, reject) => {
    reject(); // resolve() behaves similarly
    console.log("ALWAYS REACHED"); // "REJECTED" will print AFTER this
})
    .then(() => console.log("RESOLVED"))
    .catch(() => console.log("REJECTED"));// ALWAYS REACHED REJECTED
*/
/*
//Example-6
function timeout(duration) { // Thanks joews
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

timeout(1000).then(function () {
    throw 'worky!';
    // return Promise.reject('worky'); also works
}).catch(function (e) {
    console.log(e); // 'worky!'
});
*/

/*
    //Example-7
function timeout(duration) { // Thanks joews
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

timeout(1000).then(function () {
    // throw 'worky!';
    return Promise.reject('worky'); //also works
}).catch(function (e) {
    console.log(e); // 'worky!'
});*/

//Example-9
var p1 = new Promise(function (resolve, reject) {
    throw 'test 1.1'; //This actually happens
    console.log('test 1.1.1'); //This never happens
    reject('test 1.2'); //This never happens because throwing an error already rejected the promise
    console.log('test 1.3'); //This never happens
});

var p2 = new Promise(function (resolve, reject) {
    reject('test 2.1'); //This actually happens
    console.log('test 2.1.1'); //This happens BEFORE the Promise is rejected because reject() is a callback
    throw 'test 2.2'; //This error is caught and ignored by the Promise
    console.log('test 2.3'); //This never happens
});

var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () { reject('test 3.1'); }, 1000); //This never happens because throwing an error already rejected the promise
    throw ('test 3.2'); //This actually happens
    console.log('test 3.3'); //This never happens
});

var p4 = new Promise(function (resolve, reject) {
    throw ('test 4.1'); //This actually happens
    setTimeout(function () { reject('test 4.2'); }, 1000); //This never happens because throwing an error already rejected the promise
    console.log('test 4.3'); //This never happens
});

var p5 = new Promise(function (resolve, reject) {
    setTimeout(function () { throw ('test 5.1'); }, 1000); //This throws an Uncaught Error Exception
    reject('test 5.2'); //This actually happens
    console.log('test 5.3'); //This happens BEFORE the Promise is rejected because reject() is a callback
});

var p6 = new Promise(function (resolve, reject) {
    reject('test 6.1'); //This actually happens
    setTimeout(function () { throw ('test 6.2'); }, 1000); //This throws an Uncaught Error Exception
    console.log('test 6.3'); //This happens BEFORE the Promise is rejected because reject() is a callback
});


p1.then(function (resolve) {
    console.log(resolve, "resolved")
}, function (reject) {
    console.log(reject, "rejected")
}).catch(function (err) {
    console.log(err, "caught"); // test1
});

p2.then(function (resolve) {
    console.log(resolve, "resolved")
}, function (reject) {
    console.log(reject, "rejected")
}).catch(function (err) {
    console.log(err, "caught"); // test2
});

p3.then(function (resolve) {
    console.log(resolve, "resolved")
}, function (reject) {
    console.log(reject, "rejected")
}).catch(function (err) {
    console.log(err, "caught"); // test3
});

p4.then(function (resolve) {
    console.log(resolve, "resolved")
}, function (reject) {
    console.log(reject, "rejected")
}).catch(function (err) {
    console.log(err, "caught"); // test4
});

p5.then(function (resolve) {
    console.log(resolve, "resolved")
}, function (reject) {
    console.log(reject, "rejected")
}).catch(function (err) {
    console.log(err, "caught"); // test5
});

p6.then(function (resolve) {
    console.log(resolve, "resolved")
}, function (reject) {
    console.log(reject, "rejected")
}).catch(function (err) {
    console.log(err, "caught"); // test6
});

/*
    //Example-11
api().then(function (result) {
    return api2();
}).then(function (result2) {
    return api3();
}).then(function (result3) {
    // do work
}).catch(function (error) {
    //handle any error that may occur before this point
}).then(function () {
    //do something whether there was an error or not
    //like hiding an spinner if you were performing an AJAX request.
});
*/

/*
    //Example-12
Promise.all([api(), api2(), api3()]).then(function (result) {
    //do work. result is an array contains the values of the three fulfilled promises.
}).catch(function (error) {
    //handle the error. At least one of the promises rejected.
});
*/

/*
    //Example-13
// Sequentially:
api1()
    .then(r1 => api2(r1))
    .then(r2 => api3(r2))
    .then(r3 => {
        // Done
    });

// Parallel:
Promise.all([
    api1(),
    api2(),
    api3()
]).then(([r1, r2, r3]) => {
    // Done
});
*/

/*
    //Example-14
async function getExample() {
    var resultA = await promiseA(…);
    // some processing
    var resultB = await promiseB(…);
    // more processing
    return // something using both resultA and resultB
}
*/

/*
    //Example-15
var getExample = Promise.coroutine(function* () {
    //               ^^^^^^^^^^^^^^^^^ Bluebird syntax
    var resultA = yield promiseA(…);
    // some processing
    var resultB = yield promiseB(…);
    // more processing
    return // something using both resultA and resultB
});
*/
/*
    //Example-16
function getExample() {
    var a = promiseA(…);

    var b = a.then(function () {
        return promiseB(…)
    });

    var c = b.then(function () {
        return promiseC(…);
    });

    var d = c.then(function () {
        return promiseD(…);
    });

    return d.then(function () {
        return a.value() + b.value() + c.value() + d.value();
    });
}
*/