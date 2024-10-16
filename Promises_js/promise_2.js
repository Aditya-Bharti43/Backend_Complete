new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("This message is printed after 1 second")
        resolve({username:"Aditya",mail:"something@gmail.com"})
      },1000)
}).then((user)=>{
   console.log(user)
})