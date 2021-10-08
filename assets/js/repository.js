console.log("Here, I am : repository.js");

// function to fetch user data from api
function getRepositories(username) {
    // console.log('Function called: getRepositories()');
    let urlRepository = `https://api.github.com/users/${username}/repos`;
    fetch(urlRepository).then((response) => {
        return response.json();
    }).then((repo) => {
        userRepositories(repo);
    }).catch((error) => {
        console.log(error);
    });
}

getRepositories(username);

function userRepositories(repo) {
    // console.log('Function called: userRepositories()');
    console.log("\n");
    console.warn(`--- Repositeries fetched successfully!`);

    // limit requests
    let limit;
    if(repo.length < requestLimit) {
        limit = repo.length;
    }
    else {
        limit = requestLimit;
    }
    
    // List of repositories
    let html = "";
    for(let i = 0; i < limit; i++) {
        console.log("Repositories Api Data:", repo[i]);
        html += `
        <div class="card bg-transparent border-secondary text-white mb-3">
            <div class="card-body">
                <a href="${repo[i].html_url}" target="_blank" class="h5 card-title text-decoration-none text-info"><span class="me-1 font-monospace">${i+1}</span><span class="me-2">)</span>${repo[i].name}</a>
                <p class="card-text mt-3">${repo[i].description}</p>
            </div>
            <div class="card-footer border-secondary d-flex flex-column flex-sm-row justify-content-between">
                <div>
                    <small class="opacity-50 me-3"><i class="bi bi-circle-fill me-2"></i>${repo[i].language}</small>
                    <small class="opacity-50 me-3">Last updated 3 mins ago</small>
                </div>
                <div>
                    <small class="opacity-50 me-3"><i class="far fa-eye me-2"></i>${repo[i].watchers_count} Views</small>
                    <small class="opacity-50 me-3"><i class="fas fa-code-branch me-2"></i>${repo[i].forks_count} Forks</small>
                </div>
            </div>
        </div>
        `;
    };
    let repoContainer = document.getElementById('repo-container');
    repoContainer.innerHTML = html;
}