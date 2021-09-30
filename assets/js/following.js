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
                <div class="col-md-2 d-flex justify-content-center align-items-center">
                    <img src="${data.avatar_url}" class="img-fluid rounded-circle" alt="..." style="width: 100px;">
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}<i class="bi bi-patch-check text-warning ms-2"></i><small class="opacity-75 fw-light ms-3">${data.login}</small></h5>
                        <p class="card-text text-truncate">${data.bio}</p>
                        <div class="d-flex">
                            <small class="opacity-75 me-4"><i class="bi bi-geo-alt-fill me-2"></i>${data.location}</small>
                            <small class="opacity-75 me-3"><i class="bi bi-people-fill me-2"></i>${data.followers} Followers</small>
                            <small class="opacity-75 me-3"><i class="bi bi-person-lines-fill me-2"></i>${data.following} Following</small>
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

    // List of following
    let username;
    following.forEach((element) => {
        username = element.login;
        getFollowingData(username);
    });
}

function displayFollowing(template) {
    let followingContainer = document.getElementById('following-container');
    followingContainer.innerHTML += template;
}