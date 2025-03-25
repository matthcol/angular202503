import { Component } from '@angular/core';
import { City } from '../../interface/city';

@Component({
  selector: 'app-city-card-simple',
  imports: [],
  template: `
    <section>
      <h2>{{city.name}}</h2>
    </section>
  `,
  styles: `:host h2 {color: orange}`
})
export class CityCardSimpleComponent {

  city: City = {
    name: 'Montauban'
  }

}
