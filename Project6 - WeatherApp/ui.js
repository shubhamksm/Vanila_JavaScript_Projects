class UI{
  constructor(){
    this.wCity = document.getElementById('w-city');
    this.wIcon = document.getElementById('w-icon');
    this.wTemp = document.getElementById('w-temp');
    this.wfeelsLike = document.getElementById('w-feels-like');
    this.wSpeed = document.getElementById('w-speed');
    this.wHumidity = document.getElementById('w-humidity');
  }

  //Show the fetched data
  showChanges(data){
    this.wCity.innerHTML = `${data.name} - ${data.sys.country}`;
    this.wTemp.innerHTML = `Temperature - ${data.main.temp}`;
    this.wfeelsLike.innerHTML = `Feels Like - ${data.main.feels_like}`;
    this.wSpeed.innerHTML = `Speed - ${data.wind.speed}`;
    this.wHumidity.innerHTML = `Humidity - ${data.main.humidity}`;
    this.showIcon(data);
  }

  //Show Icon 
  showIcon(data){
    console.log(data);
    console.log(data.weather[0].id, String(data.weather[0].id).charAt(0));
    switch(true){
      //Clear
      case data.weather[0].main === 'Clear': 
        this.wIcon.innerHTML = `
          <div icon="sunny" data-label="${data.weather[0].description}" class="mx-auto">
            <span class="sun"></span>
          </div>
        `;
        break;
      //Cloudy
      case data.weather[0].main === 'Clouds':
        this.wIcon.innerHTML = `
          <div icon="cloudy" data-label="${data.weather[0].description}" class="mx-auto">
            <span class="cloud"></span>
            <span class="cloud"></span>
          </div>
        `;
        break;

      //Snow
      case data.weather[0].main === 'Snow':
        this.wIcon.innerHTML = `
          <div icon="snowy" data-label="${data.weather[0].description}" class="mx-auto">
            <span class="snowman"></span>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        `;
        break;

        //In default will write Moon and Rainy mode
        default:
          if(String(data.weather[0].id).charAt(0) === '2' ||
          String(data.weather[0].id).charAt(0) === '3' ||
          String(data.weather[0].id).charAt(0) === '5'){
            this.wIcon.innerHTML = `
            <div icon="stormy" data-label="${data.weather[0].description}" class="mx-auto">
              <span class="cloud"></span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            `;
          } else {
            this.wIcon.innerHTML = `
            <div icon="supermoon" data-label="${data.weather[0].description}" class="mx-auto">
              <span class="moon"></span>
              <span class="meteor"></span>
            </div>
            `; 
          }
    }
  }

  //Show error 
  showError(msg){

  }

}