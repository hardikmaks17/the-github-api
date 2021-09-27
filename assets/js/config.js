console.log("Here, I am : config.js");

// username of github user
const username = "hardikmaks17";

// function to fetch user data from api
function getData(username) {
    // console.log('Function called: getData()');
    const url = `https://api.github.com/users/${username}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        let navbarUsername = document.getElementById('navbar-username');
        let navbarPhoto = document.getElementById('navbar-photo');
        navbarUsername.innerHTML = data.name;
        navbarPhoto.src = `${data.avatar_url}`;

        console.warn("--- User Data fetched successfully!");
        console.log(data);
        return userProfile(data);
    }).catch((error) => {
        console.log(error);
    });
}

// fetching data
getData(username);