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

// function to get follower's full information
function getFollowerData(followerUsername) {
    const url = `https://api.github.com/users/${followerUsername}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("Follower Api Data:", data);
        let html = `
            <div class="card bg-transparent border-secondary text-white mb-3">
                <div class="row g-0">
                    <div class="col-sm-2 d-flex justify-content-center align-items-center">
                        <img src="${data.avatar_url}" class="img-fluid rounded-circle ms-3 my-2" alt="..." style="width: 100px;">
                    </div>
                    <div class="col-sm-10">
                        <div class="card-body">
                            <h5 class="card-title"><span class="user-select-all">${data.name}</span><i class="bi bi-patch-check text-warning ms-2 me-3"></i><small class="opacity-75 fw-light user-select-all">${data.login}</small></h5>
                            <p class="card-text">${data.bio}</p>
                            <div class="d-flex">
                                <small class="opacity-75 me-4"><i class="bi bi-geo-alt-fill me-2"></i>${data.location}</small>
                                <small class="opacity-75 me-4"><i class="bi bi-people-fill me-2"></i>${data.followers} Followers</small>
                                <small class="opacity-75 me-4"><i class="bi bi-person-lines-fill me-2"></i>${data.following} Following</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return displayFollowers(html);
    }).catch((error) => {
        console.log(error);
    });
}

// function to extrat followers data 
function userFollowers(follower) {
    // console.log('Function called: userFollowers()');
    console.log("\n");
    console.warn(`--- Followers fetched successfully!`);

    // limit requests
    let limit;
    if(follower.length < requestLimit) {
        limit = follower.length;
    }
    else {
        limit = requestLimit;
    }

    // List of followers
    let username;
    for(let i=0; i < limit; i++) {
        username = follower[i].login;
        getFollowerData(username);
    }
}

function displayFollowers(template) {
    let followerContainer = document.getElementById('follower-container');
    followerContainer.innerHTML += template;
}