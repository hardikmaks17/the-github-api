console.log("Here, I am : follower.js");

// function to fetch user data from api
function getFollowers(username) {
    // console.log('Function called: getFollowers()');
    let urlFollower = `https://api.github.com/users/${username}/followers`;
    fetch(urlFollower).then((response) => {
        return response.json();
    }).then((follower) => {
        userFollowers(follower);
    }).catch ((error) => {
        console.log(error);
    });
}

// fetch followers data
getFollowers(username);

// function to extrat followers data 
function userFollowers(follower) {
    // console.log('Function called: userFollowers()');
    console.log("\n");
    console.warn(`--- Followers fetched successfully!`);
    
    // List of followers
    for(let i=0; i < follower.length; i++) {

        //* Follower object 
        console.log(follower[i]);
        
        //* Extracted follower information from follower object
        // console.log("-------------------------------");
        // let followerEntries = Object.entries(follower[i]);
        // for(let j=0; j < followerEntries.length; j++){
        //     console.log(followerEntries[j][0], ":" , followerEntries[j][1]);
        // }
    }
}