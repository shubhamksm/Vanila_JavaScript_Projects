//Init github 
const github = new Github;

//Init UI 
const ui = new UI;

//declare input element
const userInput = document.getElementById('userInput');

//Listen to the User Input
userInput.addEventListener('keyup', fetchData);

//Function Fetch data
function fetchData(e){
  const userName = e.target.value;
  if(userName !== ''){
    github.getData(userName)
    .then(data => {
        if(data.profile.message === 'Not Found'){
          //Alert Not found 
          ui.showError();
        } else {
          //Update the UI
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
    })
  } else {
    //Clear the UI
    ui.clearProfile();
    ui.clearRepos();
  }
}