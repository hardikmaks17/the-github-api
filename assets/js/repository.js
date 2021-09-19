console.log("Here, I am : repository.js");

// function to fetch user data from api
function getRepositories(username) {
    console.log('Function called: getRepositories()');
    let urlRepository = `https://api.github.com/users/${username}/repos`;
    fetch(urlRepository).then((response) => {
        return response.json();
    }).then((repo) => {
        userRepositories(repo);
    }).catch ((error) => {
        console.log(error);
    });
}

getRepositories(username);

function userRepositories(repo) {
    console.log('Function called: userRepositories()');
    console.log("\n");
    console.warn(`--- Repositeries fetched successfully!`);
    console.log(repo[0]);

    // List of repositories
    repo.forEach((element, index) => {
        console.log(`Name ${index+1}:`, element.name, " | Profile:", element.html_url);
        // console.log(`URL ${index+1}:`, element.html_url);
    });
}