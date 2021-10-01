console.log("Here, I am : signin.js");

if(localStorage.getItem('GitHub_Username')) {
    let username = document.getElementById('usernameInput');
    username.value = localStorage.getItem('GitHub_Username');
    let rememberMe = document.getElementById('rememberMe');
    rememberMe.checked = true;
}

// username of github user
let signInBtn = document.getElementById('signIn');
signInBtn.addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value;
    console.log("Signed in as :", username);
    sessionStorage.setItem('GitHub_Username', username);
    let rememberMe = document.getElementById('rememberMe');
    console.log("Remember?", rememberMe.checked);
    if(rememberMe.checked) {
        localStorage.setItem('GitHub_Username', username);
    }
})