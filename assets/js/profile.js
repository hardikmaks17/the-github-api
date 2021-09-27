console.log("Here, I am : profile.js");

// user data
function userProfile(user) {
    // console.log('Function called: userProfile()');

    // console.log(user);

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

    // // Personal Datails
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
    // console.log("\n*** Personal Datails ***");
    // console.log("GitHub ID:", user.id);
    // console.log("Username:", user.login);
    // console.log("Full Name:", user.name);
    // console.log("Bio:", user.bio);
    // console.log("Location:", user.location);
    // console.log("Open to work?:", user.hireable);
    // console.log("GitHub Profile:", user.html_url);
    // console.log("Website Link:", `https://${user.blog}`);
    // console.log("Twitter Account:", `https://twitter.com/${user.twitter_username}`);
    // console.log("Profile Picture:", user.avatar_url);
    
    // // GitHub Details
    // console.log("\n*** GitHub Details ***");
    // console.log("Number of followers:", user.followers);
    // console.log("Number of following:", user.following);
    // console.log("Number of Public Repositories:", user.public_repos);
    // console.log("Followers List:", user.followers_url);
    // console.log("Following List:", `https://api.github.com/users/${user.login}/following`);
    // console.log("List of Repsoitories:", user.repos_url);
    // console.log("List of Starred Repsoitories:", `https://api.github.com/users/${user.login}/starred`);
    // console.log("List of GitHub Pages:", user.subscriptions_url);
    // console.log("List of Organizations:", user.organizations_url);
    // console.log("Created on:", user.created_at);
    // console.log("Last Updated on:", user.updated_at);
}