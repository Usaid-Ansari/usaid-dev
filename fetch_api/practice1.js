// async function loadPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const posts = await response.json();
//     console.log(posts);
//   } catch (error) {
//     console.error("Could not load posts:", error);
//   }
// }

// loadPosts();

async function loadPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const posts = await response.json();
        // console.log(posts);
        posts.forEach(element => {
            console.log(element.title);
        });
    } catch (error) {
        console.error("Could not load posts:", error);
    }
}
loadPosts();