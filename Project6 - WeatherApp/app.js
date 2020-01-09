//Init Weather
const weather = new Weather;

//Init UI
const ui = new UI;

//Add event listener to Save Changes
document.getElementById('change-btn').addEventListener('click', function(){
  //Get the City value
  const city = document.getElementById('w-change-city').value;

  //Check if Value is not empty
  if(city === ''){
    //Throw error with Please fill in data 
    ui.showError();
  } else {
    //call getWeather to fetch the data through API
    weather.getWeather(city)
    .then(data => {
      //Pass the data to showChanges to UI
      console.log(data);
      ui.showChanges(data);
    });
  }

})
