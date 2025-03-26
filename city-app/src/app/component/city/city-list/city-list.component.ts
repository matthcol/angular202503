import { Component } from '@angular/core';
import { City } from '../../../interface/city';
import { DatePipe } from '@angular/common';
import { CityCardComponent } from "../city-card/city-card.component";

@Component({
  selector: 'app-city-list',
  imports: [DatePipe, CityCardComponent],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {

  today = new Date()

  disposition = 'v1'

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

  changePrefectureState(indexCity: number, event: Event) {
    const city = this.cities[indexCity]
    console.log(`change prefecture of city ${city.name}, old state = ${city.prefecture}`)
    const inputElement =  event.target as HTMLInputElement;
    console.log(`new state = ${inputElement.checked}`)
    // actualiser le modèle (solution provisoire)
    // mieux: two-way binding
    city.prefecture = inputElement.checked
  }

  changeDisposition(event: Event){
    this.disposition = (event.target as HTMLInputElement).value
  }
}
