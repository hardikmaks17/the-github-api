console.log("Here, I am : config.js");

// username of github user
let username;
if(localStorage.getItem('GitHub_Username')) {
    username = localStorage.getItem('GitHub_Username');
}
else {
    username = sessionStorage.getItem('GitHub_Username');
}
console.log("Config Username :", username);

// function to fetch user data from api
function getData(username) {
    // console.log('Function called: getData()');
    const url = `https://api.github.com/users/${username}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        let navbarUsername = document.getElementById('navbar-username');
        let navbarPhoto = document.getElementById('navbar-photo');
        navbarUsername.innerHTML = data.name.toLowerCase();
        navbarPhoto.src = `${data.avatar_url}`;

        console.warn("--- User Data fetched successfully!");
        console.log("User Api Data:", data);
        return userProfile(data);
    }).catch((error) => {
        console.log(error);
    });
}

// fetching data
getData(username);

let repoContainer = document.getElementById('repo-container');
let followerContainer = document.getElementById('follower-container');
let followingContainer = document.getElementById('following-container');
let navitemRepositories = document.getElementById('navitem-repositories');
let navitemFollowers = document.getElementById('navitem-followers');
let navitemFollowing = document.getElementById('navitem-following');
let navlinkRepositories = document.getElementById('navlink-repositories');
let navlinkFollowers = document.getElementById('navlink-followers');
let navlinkFollowing = document.getElementById('navlink-following');
followerContainer.style.display = "none";
followingContainer.style.display = "none";

navitemRepositories.addEventListener('click', () => {
    // navtab behaviour
    navlinkRepositories.classList.add('active');
    navlinkRepositories.classList.remove('text-white');
    navlinkFollowers.classList.add('text-white');
    navlinkFollowers.classList.remove('active');
    navlinkFollowing.classList.add('text-white');
    navlinkFollowing.classList.remove('active');
    
    // DOM behaviour
    repoContainer.style.display = "inherit";
    followerContainer.style.display = "none";
    followingContainer.style.display = "none";
});

navitemFollowers.addEventListener('click', () => {
    // navtab behaviour
    navlinkFollowers.classList.add('active');
    navlinkFollowers.classList.remove('text-white');
    navlinkRepositories.classList.add('text-white');
    navlinkRepositories.classList.remove('active');
    navlinkFollowing.classList.add('text-white');
    navlinkFollowing.classList.remove('active');
    
    // DOM behaviour
    followerContainer.style.display = "inherit";
    repoContainer.style.display = "none";
    followingContainer.style.display = "none";
});

navitemFollowing.addEventListener('click', () => {
    // navtab behaviour
    navlinkFollowing.classList.add('active');
    navlinkFollowing.classList.remove('text-white');
    navlinkRepositories.classList.add('text-white');
    navlinkRepositories.classList.remove('active');
    navlinkFollowers.classList.add('text-white');
    navlinkFollowers.classList.remove('active');
    
    // DOM behaviour
    followingContainer.style.display = "inherit";
    repoContainer.style.display = "none";
    followerContainer.style.display = "none";
});