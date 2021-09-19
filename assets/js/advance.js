console.log("Here, I am : advance.js");

// user data
function userProfile(user) {
    console.log('Function called: userProfile()');

    // print fetched userData
    console.log(user);
    let userEntries = Object.entries(user);
    let userKeys = Object.keys(user);
    let userValues = Object.values(user);
    let list = ["followers_url", "subscriptions_url", "organizations_url", "repos_url"];
    let badList = ["url", "events_url", "starred_url", "following_url", "received_events_url"]
    console.log(list);
    for(let i=0; i < userEntries.length; i++) {
        // console.log(userKeys[i], ":" , userValues[i]);
        for(let j=0; j<list.length; j++) {
            if(list[j] == userKeys[i]) {
                console.warn("----Found", userValues[i]);
                getDynamic(userValues[i], userKeys[i]);
            }
        }
    }
}

function getDynamic(elms, urlKey) {
    // console.log('Function called: dynamic()');
    // console.log(elms);
    // console.log(userKeys);
    fetch(elms).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("\n");
        console.log(`--- "${urlKey}" fetched successfully!`);
        var maks = Object.keys(data[0]);
        let prim = maks[2];
        console.log(prim);
        data.forEach(element => {
            // console.log(maks[0]);
            // let maks1 = maks[0];
            console.log(element[prim]);
            // let elementKeys = Object.keys(element);
        });
        // console.log(Object.keys(element));
    }).catch ((error) => {
        console.log(error);
    });
}