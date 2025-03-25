import { Component } from '@angular/core';
import { City } from '../../interface/city';

@Component({
  selector: 'app-city-list',
  imports: [],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {

  cities: City[] = [
    {
      name: 'Toulouse',
      population: 500_000,
      zipcode: '31000',
      prefecture: true,
    },
    {
      name: 'Pau',
      population: 77_000,
      prefecture: true,
    },
    {
      name: 'Montauban',
      prefecture: true,
    },
    {
      name: 'Marseille',
      zipcode: '13000',
      prefecture: true,
    },
    {
      name: 'Balma',
      prefecture: false,
    },
    {
      name: 'Blagnac'
    }
  ]

  addCity(){
    console.log("Ajout ville")
    // appel méthode d'1 service, ...
  }

  resetPrefecture(){
    // met à faux la propriété prefecture de toutes les villes
    this.cities.forEach(city => city.prefecture = false)
  }
}
