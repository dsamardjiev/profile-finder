function getProfile(e){
	e.preventDefault();
	var username = document.getElementById('username').value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var user = JSON.parse(xhttp.responseText);
			document.getElementById('profile').innerHTML = `<div class="profile-holder">
				<h1 class="mb25">${username}</h1>
				<img class="img-responsive img-circle img-avatar" src="${user.avatar_url}">
				<p class="mt25">${user.bio}</p>
				<ul class="list-group list-unstyled mt25 mb25">
					<li class="list-group-item">
						<i class="info-icons glyphicon glyphicon-fire"></i> <small>${user.blog}</small>
					</li>
					<li class="list-group-item">
						<i class="info-icons glyphicon glyphicon-pencil"></i> <small>${user.email}</small>
					</li>
				</ul>
				<div class="row">
					<div class="col-xs-4">
						<h5>Repos</h5>
						<h2>${user.public_repos}</h2>
					</div>
					<div class="col-xs-4">
						<h5>Gists</h5>
						<h2>${user.public_gists}</h2>
					</div>
					<div class="col-xs-4">
						<a class="btn btn-lg btn-default" target="_blank" href="${user.html_url}">View</a>
					</div>
				</div>
			</div>`;
		}
	}
	xhttp.open('GET', 'https://api.github.com/users/' + username, true);
	xhttp.send();
}
document.getElementById('userForm').addEventListener('submit', getProfile, false);