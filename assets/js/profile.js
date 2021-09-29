console.log("Here, I am : profile.js");

function userProfile(user) {
    // console.log('Function called: userProfile()');

    console.log("\n");
    console.warn("--- User Profile fetched successfully!");
    console.log("User Profile:", user);

    let profile = document.getElementById('profile-photo');
    let name = document.getElementById('profile-name');
    let username = document.getElementById('profile-username');
    let bio = document.getElementById('profile-bio');
    let followers = document.getElementById('profile-followers');
    let following = document.getElementById('profile-following');
    let repositories = document.getElementById('profile-repositories');
    let created = document.getElementById('profile-created');
    let location = document.getElementById('profile-location');
    let website = document.getElementById('profile-website');
    let github = document.getElementById('profile-github');
    let twitter = document.getElementById('profile-twitter');

    // displaying data on webpage
    profile.src = `${user.avatar_url}`;
    name.innerHTML = user.name;
    username.innerHTML = user.login;
    bio.innerHTML = user.bio;
    followers.innerHTML = user.followers;
    following.innerHTML = user.following;
    repositories.innerHTML = user.public_repos;
    created.innerHTML = user.created_at;
    location.innerHTML = user.location;
    website.href = `${user.blog}`;
    github.href = `${user.html_url}`;
    twitter.href = `https://twitter.com/${user.twitter_username}`;
}