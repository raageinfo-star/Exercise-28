function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Promise completed successfully!");
            } else {
                reject("Something went wrong!");
            }
        }, 2000);
    });
}

console.log("Starting Promise...");

getData()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

console.log("This message shows up immediately.");