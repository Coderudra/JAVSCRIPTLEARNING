/* creating promise

    let myPromise=new Promise((resolve,reject)=>{
        let success = true;
       setTimeout(()=>{
        if(success){
            resolve('success')
        }
        else{
            reject("not sucesss")
        }
       },1000)
    })
    myPromise.then((message)=>
        console.log(message)
    ).catch((error)=>console.log(error));

 end
*/

/*
--->>> chaining promise
function Task1(){
        return new Promise((resolve)=>setTimeout(()=>resolve(5),1000))
    }
  function Task2(){
        return new Promise((resolve)=>setTimeout(()=>resolve(6),1000))
    }

    Task1().then((result)=>{
        console.log(result)
        return Task2();
    }).then((result2)=>{
        console.log(result2)
    }).catch((error)=>{
        console.log(error)
    })
    */


    // -->>Runs multiple promises in parallel and waits for all of them to complete. If one promise fails, the entire Promise.all() fails.
// const p1 = new Promise(resolve => setTimeout(() => resolve("P1 done"), 1000));
// const p2 = new Promise((resolve,reject) => setTimeout(() => reject("P2 fail"), 2000));

// Promise.all([p1, p2]).then(results => console.log(results)).catch((erorr)=>console.log(erorr)); // ["P1 done", "P2 done"]

//  Promise.all([Task1(),Task2()]).then((resule)=>{
//     const sum=resule[0]+resule[1];
//     console.log(sum)
// });


//
//Promise.allSettled --> Waits for all promises to complete, even if some fail.
// Promise.allSettled([
//     Promise.resolve("Success"),
//     Promise.reject("Failure")
// ]).then(results => console.log(results));

//
// Promise.race Resolves/rejects as soon as the first promise completes.
//  Promise.race([Promise.reject("Success"), Promise.resolve("Failure")])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally((x) => console.log(x));

//Promise.any Resolves as soon as any one promise fulfills.
// Promise.any([
//     Promise.reject("Error 1"),
//     Promise.resolve("Success 1"),
//     Promise.resolve("Success 2")
// ]).then(result => console.log(result)); // "Success 1"
