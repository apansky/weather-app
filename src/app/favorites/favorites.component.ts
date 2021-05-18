import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { City } from '@shared/models/city';
import { FormControl } from '@angular/forms';
import { startWith, switchMap } from 'rxjs/operators';
import { getUniqueListBy } from '@shared/helpers';
import { Router } from '@angular/router';
import { Routes } from '@shared/enums/routes';

@UntilDestroy()
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  countries: { countryCode: string, country: string }[];
  cities: City[];
  countryControl: FormControl;

  constructor(
    private readonly angularFireStore: AngularFirestore,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.initFireStore();
  }

  goToCity(city: City) {
    this.router.navigate([Routes.FAVORITE], { queryParams: city })
  }

  private buildForm(): void {
    this.countryControl = new FormControl();
  }

  private initFireStore(): void {
    this.countryControl.valueChanges
      .pipe(
        untilDestroyed(this),
        startWith(''),
        switchMap((countryCode) => this.angularFireStore.collection<City>('cities', (ref) => countryCode && countryCode !== 'ALL' ? ref.where('countryCode','==', countryCode) : ref).valueChanges())
      ).subscribe((cities) => {
        this.cities = cities;
        if (!this.countryControl.value || this.countryControl.value === 'ALL') {
          this.countries = getUniqueListBy(cities.map((city) => ({ countryCode: city.countryCode, country: city.country })), 'countryCode');
        }
      });
  }

}
