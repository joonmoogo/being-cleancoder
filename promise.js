
// Promise에서 
// pending : 이행하지 않은, 거부하지 않은 초기상태
// fulfilled : 연산이 성공적으로 완료됨
// rejected : 연산 실패함

function testPromise(){ 
    console.log('동기적 코드 시작'); //1
    
    let p1 = new Promise((resolve,reject)=>{
        console.log('비동기적 코드 시작'); //2
        setTimeout(()=>{
            resolve('프로미스 이행');
        },1000)
    }) 

    p1.then((msg)=>{
        console.log(msg);
        console.log('비동기적 코드 종료'); // 4
    })
    .catch((msg)=>{
        console.log(msg);
    })

    console.log('동기적 코드 종료'); // 3
}

testPromise();

