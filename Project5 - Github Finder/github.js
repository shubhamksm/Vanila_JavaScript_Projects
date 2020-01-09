class Github{
  constructor(){
    this.client_id = '0455afb7daf69bb8b715';
    this.client_seceret = 'efe79844b1dbd72a5f43ba7636f1b1eee8301fd7';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getData(userName){
    const responseProfile = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_seceret}`);

    //For Repos
    const responseRepos = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_seceret}`);

    const profile = await responseProfile.json();
    const repos = await responseRepos.json();

    return {
      profile,
      repos
    };
  }
}