import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { GeoDbService } from 'wft-geodb-angular-client';
import { GeoResponse } from 'wft-geodb-angular-client/lib/model/geo-response.model';
import { PlaceSummary } from 'wft-geodb-angular-client/lib/model/place-summary.model';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  cityControl: FormControl;
  filteredCities: Observable<PlaceSummary[]>;
  @Output() readonly citySelected: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly geoDbService: GeoDbService
  ) { }

  ngOnInit(): void {
    this.cityControl = new FormControl();
    this.filteredCities = this.cityControl.valueChanges
      .pipe(
        debounceTime(500),
        filter((cityNamePrefix) => cityNamePrefix?.length > 3),
        switchMap((cityNamePrefix: string) => this.geoDbService.findPlaces({
          namePrefix: cityNamePrefix,
          types: ['CITY'],
          sortDirectives: ['-population'],
          limit: 10,
          offset: 0
        })
        .pipe(map((response: GeoResponse<PlaceSummary[]>) => response.data)))
      );
  }

  getCityDisplayName(city: PlaceSummary): string {
    if (!city) {
      return null;
    }

    let name = city.name;

    if (city.region) {
      name += ', ' + city.region;
    }

    name += ', ' + city.country;

    return name;
  }
}
