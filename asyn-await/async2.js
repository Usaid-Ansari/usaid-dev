async function getData() {
  console.log("Run first");
    setTimeout(function(){
        console.log("I am inside setTime block");
    }, 0);
}
getData();
console.log("run second");