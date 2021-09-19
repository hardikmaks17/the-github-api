console.log("Here, I am : config.js");

// username of github user
const username = "hardikmaks17";
let url = `https://api.github.com/users/${username}`;

// function to fetch user data from api
function getData(login) {
    // console.log('Function called: getData()');
    let url = `https://api.github.com/users/${login}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.warn("--- User Data fetched successfully!");
        console.log(data);
        // return userProfile(data);
        // getFollowers();
    }).catch ((error) => {
        console.log(error);
    });
}

// fetching data
getData(username);