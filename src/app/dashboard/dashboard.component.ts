import { Component, OnInit } from '@angular/core';
import { PlaceSummary } from 'wft-geodb-angular-client/lib/model/place-summary.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  city: Partial<PlaceSummary>;
  loading = false;

  ngOnInit(): void {
    this.getLocation();
  }

  citySelected(city: PlaceSummary): void {
    this.city = city;
  }

  private getLocation(): void {
    if (navigator.geolocation) {
      this.loading = true;
      navigator.geolocation.getCurrentPosition((position) => {
        this.loading = false;
        this.city = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    }
  }

}
