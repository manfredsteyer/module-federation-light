import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight/flight.component';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'flights-search', component: FlightComponent  }
    ])
  ],
  declarations: [FlightComponent, LazyComponent]
})
export class FlightLibModule {}
