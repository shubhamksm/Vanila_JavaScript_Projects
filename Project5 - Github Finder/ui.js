class UI{
  constructor(){
    this.profile = document.getElementById('userProfile');
    this.error = document.getElementById('error');
    this.reposTag = document.getElementById('repos');
  }

  showProfile(user){
    // console.log(user);
    this.profile.innerHTML = `
      <div class="card mb-3 p-2">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" class="btn btn-primary btn-block mb-2">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-danger">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  showRepos(repos){
    let output = '<h3>Latest Repos</h3>';
    repos.forEach(function(repo){
      output += `
        <div class="card card-body md-2'>
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    this.reposTag.innerHTML = output;
  }

  //Clear Profile
  clearProfile(){
    this.profile.innerHTML = '';
  }

  //Clear Repos
  clearRepos(){
    this.reposTag.innerHTML = '';
  }

  //Clear alert
  clearAlert(){
    this.error.innerHTML = '';
  }

  //Show error
  showError(){
    this.error.innerHTML = `
      <div class="alert alert-dismissible alert-danger"><strong>No User Found</strong></div>
    `;
    let self = this;
    //timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    } ,3000);
  }
}