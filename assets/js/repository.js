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
    console.log(repo[4]);
    
    // List of repositories
    let html = "";
    repo.forEach((element, index) => {       
        console.log("Repositories Api Data:", element);
        html += `
        <div class="card bg-transparent border-secondary text-white mb-3">
            <div class="card-body">
                <a href="${element.html_url}" target="_blank" class="h5 card-title text-decoration-none text-info"><span class="me-1 font-monospace">${index+1}</span><span class="me-2">)</span>${element.name}</a>
                <p class="card-text mt-3">${element.description}</p>
            </div>
            <div class="card-footer border-secondary d-flex justify-content-between">
                <div>
                    <small class="opacity-50 me-3"><i class="bi bi-circle-fill me-2"></i>${element.language}</small>
                    <small class="opacity-50 me-3">Last updated 3 mins ago</small>
                </div>
                <div>
                    <small class="opacity-50 me-3"><i class="far fa-eye me-2"></i>${element.watchers_count} Views</small>
                    <small class="opacity-50 me-3"><i class="fas fa-code-branch me-2"></i>${element.forks_count} Forks</small>
                </div>
            </div>
        </div>
        `;
    });
    let repoContainer = document.getElementById('repo-container');
    repoContainer.innerHTML = html;
}