import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { WeatherApiService } from './../shared/services/weather-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;

  constructor(
    private readonly weatherApiService: WeatherApiService
  ) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter((val) => !!val),
        switchMap((val) => this.weatherApiService.locationSearch(val))
    );
  }

  displayFn(location: any): string {
    return location && location.title ? location.title : '';
  }

}
