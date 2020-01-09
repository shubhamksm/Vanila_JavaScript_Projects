class Weather{
  constructor(){
    this.app_id = 'f752b7ca3434dcaf318358455722589a';
  }

  async getWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.app_id}`);
    const data = await response.json();
    return data;
  }
}