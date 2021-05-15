import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }