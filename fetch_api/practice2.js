// const data = {
//     title: "This is title",
//     body: "This is post body",
//     userId: 2,
// }
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         "Content-Type": "application/json"
//     }

// }).then(res => res.json())
// .then(data => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json)) 

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json' 
  },
})
  .then(response => response.json())
  .then(data  => console.log(data))