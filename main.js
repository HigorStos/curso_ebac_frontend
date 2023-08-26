document.addEventListener('DOMContentLoaded', function() {
    const endpoint = 'https://api.github.com/users/higorstos';
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');

    fetch(endpoint)
    .then(function(res) {
        return res.json();
    })
    .then(function(req) {
        avatar.src = req.avatar_url;
        name.innerText = req.name;
        username.innerText = req.login;
        repos.innerText = req.public_repos;
        followers.innerText = req.followers;
        following.innerText = req.following;
        link.href = req.html_url
    })
    .catch(function(error) {
        alert("Ocorreu um erro!\nTente novamente mais tarde.")
    })
})