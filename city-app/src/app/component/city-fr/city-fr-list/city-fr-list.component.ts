import { Component } from '@angular/core';
import { CityFr } from '../../../interface/city-fr';
import { CityService } from '../../../service/city.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-fr-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './city-fr-list.component.html',
  styleUrl: './city-fr-list.component.css'
})
export class CityFrListComponent {
  // cities from API
  cities: CityFr[] = []
  // cities to display
  citiesDisplay: CityFr[] = []

  // property associée au formulaire grâce à ngModel
  searchName = ''

  filterActivated: boolean = false

  // DI: service
  constructor(private cityService: CityService){}

  // initialisation à chaque entrée dans la page correspondante
  ngOnInit(){
    this.filterActivated = false
    this.cities = []
    this.citiesDisplay = []
    this.getAllCities()
  }

  getAllCities(){
    this.cityService.getAllCities()
      // TODO: handle error: .pipe
      .forEach((cities: CityFr[]) => {
        this.cities.push(...cities)
        this.citiesDisplay.push(...cities)
      })
  }

  changeSearchName(newSearchName: string){
    console.log(`nouvelle recherche: ${newSearchName} (old: ${this.searchName})`)
    if (newSearchName.length > 1){
      this.filterActivated = true
      console.log('activation du filtre')
      // Sol 1: ! on change de tableau
      // this.citiesDisplay = this.cities.filter(
      //   city => city.nom_standard.toLowerCase().match(newSearchName.toLowerCase())
      // ) 
      // Sol 2: maj du tableau avec splice
      this.citiesDisplay.splice(0, this.citiesDisplay.length,
        ...this.cities.filter(
          city => city.nom_standard.toLowerCase().match(newSearchName.toLowerCase())
        ) 
      )
    } else {
      this.filterActivated = false
      // TODO: reset: remttre toutes les villes dans citiesDisplay
      this.citiesDisplay.splice(0, this.citiesDisplay.length, ...this.cities)
    }
  }

}
