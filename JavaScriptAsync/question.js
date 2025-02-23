function sleep(mills){
  return new Promise((resolve)=>setTimeout(resolve,mills))
}
async function demo()
{
    console.log('fisrt step')
    await sleep(200)
    console.log("2 step")
}
demo();

// async function delays(tasks,limit){

//     for (task of tasks){
       
//     }


// }

7. Custom Promise Implementation
If you want to truly master Promises, try building a simple Promise from scratch.

Basic Promise Polyfill
javascript
Copy
Edit
class MyPromise {
    constructor(executor) {
        this.callbacks = [];
        this.state = "pending";
        this.value = null;

        const resolve = value => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.callbacks.forEach(cb => cb(value));
            }
        };

        executor(resolve);
    }

    then(onFulfilled) {
        if (this.state === "fulfilled") {
            onFulfilled(this.value);
        } else {
            this.callbacks.push(onFulfilled);
        }
        return this;
    }
}
-->custome promsie
class MyPromise {
    constructor(executor) {
        this.callbacks = [];
        this.state = "pending";
        this.value = null;

        const resolve = value => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.callbacks.forEach(cb => cb(value));
            }
        };

        executor(resolve);
    }

    then(onFulfilled) {
        if (this.state === "fulfilled") {
            onFulfilled(this.value);
        } else {
            this.callbacks.push(onFulfilled);
        }
        return this;
    }
}

// Example Usage:
new MyPromise(resolve => setTimeout(() => resolve("Hello"), 1000))
    .then(value => console.log(value)); // "Hello" after 1 second


