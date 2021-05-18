import { Component, OnInit } from '@angular/core';
import { City } from '@shared/models/city';
import { Coords } from '@shared/models/coords';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  city: Partial<City>;

  ngOnInit(): void {
    this.getLocation();
  }

  citySelected(city: City): void {
    this.city = city;
  }

  private getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.city = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    }
  }

}
