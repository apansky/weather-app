import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Component, Input } from '@angular/core';
import { WeatherApiService } from '@shared/services/weather-api.service';
import { Weather } from '@shared/models/weather';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlaceSummary } from 'wft-geodb-angular-client/lib/model/place-summary.model';
import { Router } from '@angular/router';
import { Routes } from '@shared/enums/routes';

@UntilDestroy()
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent {

  @Input() set city(city: Partial<PlaceSummary>) {
    if (city?.latitude && city.longitude) {
      this.fetchWeather(city.latitude, city.longitude);
      this._city = city;
    }
  }

  _city: Partial<PlaceSummary>;
  center: google.maps.LatLngLiteral;
  weather: Weather;

  constructor(
    private readonly angularFireStore: AngularFirestore,
    private readonly matSnackBar: MatSnackBar,
    private readonly router: Router,
    private readonly weatherApiService: WeatherApiService
  ) { }

  addToFavorites(): void {
    this.angularFireStore.collection('cities').add(this._city)
      .then(() => this.matSnackBar.open('Added to favorites', '', { duration: 3 * 1000 }));
  }

  back(): void {
    this.router.navigate([Routes.FAVORITES]);
  }

  private fetchWeather(lat: number, lng: number): void {
    if (lat && lng) {
      this.center = {
        lat: Number(lat),
        lng: Number(lng),
      };

      this.weatherApiService.getCurrentWeather(lat, lng)
        .pipe(untilDestroyed(this))
        .subscribe((weather) => this.weather = weather);
    }
  }

}
