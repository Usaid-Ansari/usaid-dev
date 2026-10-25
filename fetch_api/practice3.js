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

// fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
// .then(responce => responce.json())
// .then(data=>{
//     data.results.forEach(pokemon => {
//     console.log(`pokemon name : ${pokemon.name}`);  // All pokemon name 
//     })
// })
// // .then(data => console.log(data.name))
// .catch(error => console.log(error));

async function fetchData() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch (error) {
        console.log(error);
    }
}
fetchData();