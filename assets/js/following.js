console.log("Here, I am : following.js");

// function to fetch user data from api
function getFollowing(username) {
    // console.log('Function called: getFollowing()');
    let urlFollowing = `https://api.github.com/users/${username}/following`;
    fetch(urlFollowing).then((response) => {
        return response.json();
    }).then((following) => {
        userFollowing(following);
    }).catch ((error) => {
        console.log(error);
    });
}

// fetch following data
getFollowing(username);

// function to get following's full information
function getFollowingData(followingUsername) {
    const url = `https://api.github.com/users/${followingUsername}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("Following Api Data:", data);
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
        return displayFollowing(html);
    }).catch((error) => {
        console.log(error);
    });
}

// function to extrat following data
function userFollowing(following) {
    // console.log('Function called: userFollowing()');
    console.log("\n");
    console.warn(`--- Following fetched successfully!`);

    // limit requests
    let limit;
    if(following.length < requestLimit) {
        limit = following.length;
    }
    else {
        limit = requestLimit;
    }

    // List of following
    let username;
    for(let i=0; i < limit; i++) {
        username = following[i].login;
        getFollowingData(username);
    }
}

function displayFollowing(template) {
    let followingContainer = document.getElementById('following-container');
    followingContainer.innerHTML += template;
}