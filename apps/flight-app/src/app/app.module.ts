import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FlightLibModule } from '@flights/flight-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FlightLibModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'flights-search', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
