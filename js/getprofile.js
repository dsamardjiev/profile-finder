function getProfile(e){
	e.preventDefault();
	var username = document.getElementById('username').value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var user = JSON.parse(xhttp.responseText);
			document.getElementById('profile').innerHTML = `<div class="profile-holder">
				<img class="img-responsive img-circle img-avatar" src="${user.avatar_url}">
				<h1>${username}</h1>
				<p>${user.bio}</p>
				<ul class="list-group">
					<li class="list-group-item">
						<small><strong>website:</strong> ${user.blog}</small>
					</li>
					<li class="list-group-item">
						<small><strong>email:</strong> ${user.email}</small>
					</li>
				</ul>
				<div class="row">
					<div class="col-4">
						<h5>Repos</h5>
						<h2>${user.public_repos}</h2>
					</div>
					<div class="col-4">
						<h5>Gists</h5>
						<h2>${user.public_gists}</h2>
					</div>
					<div class="col-4">
						<p><a class="btn" target="_blank" href="${user.html_url}">View</a></p>
					</div>
				</div>
			</div>`;
		}
	}
	xhttp.open('GET', 'https://api.github.com/users/' + username, true);
	xhttp.send();
}
document.getElementById('userForm').addEventListener('submit', getProfile, false);