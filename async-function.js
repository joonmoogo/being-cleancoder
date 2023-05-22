
//async function 선언은 Promise를 사용하여 결과 반환

function resolveAfter2Seconds(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('resoloved');
        },2000);
    })
}

async function asyncCall(){
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('hihi');
}

async function wrongasyncFunction(){
    console.log('async start');
    const result = await (()=>{ // await는 promise 반환하는 함수에만..
        setTimeout(()=>{
            console.log('timeout');
        },1000)
    })
    console.log(result);
    console.log('function closed');

}

// async함수에는 await식이 포함..
// 이 식은 async 함수의 실행을 일시 중지하고
// 전달된 promise가 resolve되기를 기다린 다음
// 함수를 다시 실행 그리고 값을 반환함

// asyncCall();

// wrongasyncFunction();

let function1 = ()=>{
    console.log('starting slow promise');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20);
            console.log('slow promise is done');
        },2000)
    })
}

let function2 = ()=>{
    console.log('starting fast promise');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
            console.log('fast promise is done');
        },1000)
    })
}

let sequentialStart = async()=>{
    console.log('==SEQUENTIAL START==');
    const slow = await function1();
    console.log(slow);
    const fast = await function2();
    console.log(fast);
}

let concurrentStart = async()=>{
    console.log('==CONCURRENT START with await==');
    const slow = function1();
    const fast = function2();

    console.log(await slow);
    console.log(await fast);
}

let stillConcurrent = ()=>{
    console.log('CONCURRENT START with Promise.all==');
    Promise.all([function1(),function2()]).then((msg)=>{
        console.log(msg[0]);
        console.log(msg[1]);
    })
}

let parallel = ()=>{
    console.log('==PARALLEL with Promise.then==');
    function1().then((msg)=>console.log(msg));
    function2().then((msg)=>console.log(msg));
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
    // wait above to finish
    setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
    // wait again
    setTimeout(stillConcurrent, 7000); // same as concurrentStart
    // wait again
    setTimeout(parallel, 10000); // trully parallel: after 1 second, logs "fast", then after 1 more second, "slow"
