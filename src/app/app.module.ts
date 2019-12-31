import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatSelectModule,
  MatListModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatExpansionModule,
  MatFormFieldModule

} from '@angular/material';

import { DetailsComponent } from './movies/details/details.component';
import { FiltersComponent } from './movies/filters/filters.component';
import { MovieScreenComponent } from './movies/movie-screen/movie-screen.component';
import { MovieSelectorComponent } from './movies/movie-selector/movie-selector.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FiltersComponent,
    MovieScreenComponent,
    MovieSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatFormFieldModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
