const PromiseThree = new Promise((resolve, reject) => {
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

PromiseThree
        .then((user) => {
            return user.username;
        })
        .then((username) => {
            console.log(username);
        })
        .catch((error) => {
            console.log("An error encountered")
        })

       

