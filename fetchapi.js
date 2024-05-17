async function logMovies() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const movies = await response.json();
  console.log(movies);
}


// logMovies()


async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", 
    // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    // no-cors, *cors, same-origin
    cache: "no-cache", 
    // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", 
    // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", 
    // manual, *follow, error
    referrerPolicy: "no-referrer", 
    // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), 
    // body data type must match "Content-Type" header
  });
  return response.json(); 
  // parses JSON response into native JavaScript objects
}

// postData("https://jsonplaceholder.typicode.com/users", { 
  //  name: 'Leanne Graham',
  //  username: 'Bret',
  //  email: 'Sincere@april.biz',
    // console.log(data); 
    // }).then((data) => {
  // JSON data parsed by `data.json()` call
// });

async function postJSON(data) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };
// postJSON(data);


async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const result = await response.json();
    // console.log("Success:", result);
    console.log(response)
  } catch (error) {
    console.error("Error:", error)
  }
}

// getData()


// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response => {
//   if(!response.ok) {
//     console.log(`status: ${response.status}`)
//   }
//   return response.json()
// })
// .then(data => console.log("Userdata :", data))
// .catch(error => console.error("error :", error))



// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: "John Doe",
//     email: "johndoe@yahoo.com"
//   }),
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("error :", error))

const response = fetch("http://urlexample.com/info");
console.log(response)