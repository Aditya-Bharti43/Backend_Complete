const PromiseOne=new Promise((resolve,reject)=>{

    setTimeout(function(){
        console.log("This message is being printed after 1 second")
        resolve()
    },1000)

   

})

PromiseOne.then(function(){
    console.log("Resolve accepted")
})

