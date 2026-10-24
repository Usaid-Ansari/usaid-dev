async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(455)
            
        }, 3000)
    });
}

async function main() {
    console.log("Loading Module");
    console.log("Do Something else");
    console.log("Load Data");

    let data = await getData()

    console.log(data);
    console.log("process data");
    console.log("task 2");
}
main();