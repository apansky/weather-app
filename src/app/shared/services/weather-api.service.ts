import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '@shared/models/weather';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getCurrentWeather(lat: number, lon: number): Observable<Weather> {
    return this.httpClient.get<Weather>('/weather', { params: { lat, lon, appId: environment.appId, units: 'metric' } });
  }
}
