import { Component } from '@angular/core';
import { CityFr } from '../../../interface/city-fr';
import { CityService } from '../../../service/city.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-city-fr-list',
  imports: [RouterLink],
  templateUrl: './city-fr-list.component.html',
  styleUrl: './city-fr-list.component.css'
})
export class CityFrListComponent {
  cities: CityFr[] = []

  // DI: service
  constructor(private cityService: CityService){}

  // initialisation à chaque entrée dans la page correspondante
  ngOnInit(){
    this.cities = []
    this.getAllCities()
  }

  getAllCities(){
    this.cityService.getAllCities()
      // TODO: handle error: .pipe
      .forEach((cities: CityFr[]) => this.cities.push(...cities))
  }

}
