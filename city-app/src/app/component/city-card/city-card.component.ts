import { Component } from '@angular/core';
import { City } from '../../interface/city';

@Component({
  selector: 'app-city-card',
  imports: [],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.css'
})
export class CityCardComponent {
   city: City = {
      name: 'Toulouse',
      // population: 500_000,
      // zipcode: '31000',
    }
}
