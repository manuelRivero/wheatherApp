import moment from 'moment';

 // fetch from API
export const getData = (city, type="weather") => {
const apiKey = "ea0b23131c72bacfe9c361211bb6ea7f";
const api_weather = `https://api.openweathermap.org/data/2.5/${type}?q=${city}&units=metric&APPID=${apiKey}`;
   return fetch(api_weather)
    .then( res => {
       return res.json();
    })
    .then( res => {
        return res;
    })
    .catch( err => {
        throw err;
    }) ;
};

// transform API response into an "data" object for simple forecast
  export const  transformWeather = (res) => {
        const {speed} = res.wind;
        const {humidity, temp} = res.main;
        const {weather} = res;
        const weatherState = getWeatherState(weather);
        return  {
          humidity,
          weatherState,
          temperature:temp,
          wind: `${speed}m/s`
        }
      };
      
 // get Wheather from response object
 const  getWeatherState = ([weather]) =>{
     const {main, description, icon} = weather;
     const weatherState={
            main,
            description,
            icon
     }
    return (weatherState);
  };

  // transform API response into an "data" object for Extended Forecast
  export const transformForecastExtend = ({list}) => {
    
        return (list.filter( item => 
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18  ))
        .map( item => {
            return  {
                weekDay:moment.unix(item.dt).format('ddd'),
                hour:moment.unix(item.dt).hour(),
                data:{
                  temperature:item.main.temp,
                  wind:item.wind.speed,
                  humidity:item.main.humidity,
                  weatherState: getWeatherState(item.weather)
                  }
                }
          });
      
      };

  
