// async function getData() {
//   console.log("Run first");
//     setTimeout(function(){
//         console.log("I am inside setTime block");
//     }, 0);
// }
// getData();
// console.log("run second");

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data Load"), 2000);
})

async function getData() {
    try {
     const data = await fetchData;
    console.log(data);   
    } catch (error) {
        console.log("Error", error);
    }
    finally{
        console.log("Done");
    }
}
getData();