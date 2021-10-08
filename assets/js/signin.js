console.log("Here, I am : signin.js");

if(localStorage.getItem('GitHub_Username')) {
    let username = document.getElementById('usernameInput');
    username.value = localStorage.getItem('GitHub_Username');
    let rememberMe = document.getElementById('rememberMe');
    rememberMe.checked = true;
}
else {
    let username = document.getElementById('usernameInput');
    username.value = "";
    let rememberMe = document.getElementById('rememberMe');
    rememberMe.checked = false;
}

// username of github user
let signInBtn = document.getElementById('signIn');

signInBtn.addEventListener('click', () => {

    // get user input
    const username = document.getElementById('usernameInput').value;
    console.log("Signed in as :", username);

    // check whether "remember me" is checked or not
    let rememberMe = document.getElementById('rememberMe');
    console.log("Remember?", rememberMe.checked);

    // store username to storage
    if(rememberMe.checked) {
        localStorage.setItem('GitHub_Username', username);
        sessionStorage.setItem('GitHub_Username', username);
    }
    else {
        localStorage.removeItem('GitHub_Username', username);
        sessionStorage.setItem('GitHub_Username', username);
    }

});