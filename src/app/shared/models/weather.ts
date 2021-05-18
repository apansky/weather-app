export interface Weather {
  base: string;
  clouds: { all: number }
  cod: number;
  coord: {
    lon: number;
    lat: number
  }
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
  timezone: 7200
  visibility: 9000
  wind: {
    speed: number;
    deg: number;
  }
  weather: Description[];
}

export interface Description {
  description: string;
  icon: string;
  id: number;
  main: string;
}