const PromiseFour=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("This message is being printed after 1 second")
        let error = false;

        if (!error) {
            resolve({ username: "Aditya", password: "123" });
        }
        else {
            reject("ERROR : Something went wrong");
        }

    }, 1000)
})

// using async and await method 

async function consumePromiseFour () {
     try {
        const response=await PromiseFour
        console.log(response);
     } catch (error) {
        console.log(error)
     }
}

consumePromiseFour();

// using .then and .catch method

PromiseFour
.then((response)=>{
console.log(response)
})
.catch((error)=>{
console.log("E : " ,error)
})
