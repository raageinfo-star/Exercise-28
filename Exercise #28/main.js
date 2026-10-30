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

async function fetchData() {
    try {
        console.log("Starting to fetch data...");

        const message = await getData();

        console.log(message);

    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();

console.log("This message shows up immediately.");