import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  locationSearch(query: string): Observable<any[]> {
    return this.httpClient.get<any[]>('https://www.metaweather.com/api/location/search', { params: { query } })
  }
}
