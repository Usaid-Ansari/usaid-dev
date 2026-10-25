// let option = {
//     method: "POST",
//     headers: {
//         "Content-type":'application/json'
//     },
//     body: JSON.stringify({
//         title:'api learning',
//         body:'bar',
//         userID: 2,
//     })
// }

// fetch('https://jsonplaceholder.typicode.com/posts', option)
//   .then(response => response.json())
//   .then(data => console.log(data));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(responce => responce.json())
.then(data => console.log(data.name))
.catch(error => console.log(error));