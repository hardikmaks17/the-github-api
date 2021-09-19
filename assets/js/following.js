console.log("Here, I am : following.js");

// function to fetch user data from api
function getFollowing(username) {
    console.log('Function called: getFollowing()');
    let urlFollowing = `https://api.github.com/users/${username}/following`;
    fetch(urlFollowing).then((response) => {
        return response.json();
    }).then((following) => {
        userFollowing(following);
    }).catch ((error) => {
        console.log(error);
    });
}

getFollowing(username);

function userFollowing(following) {
    console.log('Function called: userFollowing()');
    console.log("\n");
    console.warn(`--- Following fetched successfully!`);
    console.log(following);

    // List of following
    following.forEach((element, index) => {
        console.log(`Name ${index+1}:`, element.login, " | Profile:", element.html_url);
        // console.log(`URL ${index+1}:`, element.html_url);
    });
}