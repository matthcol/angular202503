import { Component } from '@angular/core';
import { CityFr } from '../../../interface/city-fr';
import { CityService } from '../../../service/city.service';

@Component({
  selector: 'app-city-fr-list',
  imports: [],
  templateUrl: './city-fr-list.component.html',
  styleUrl: './city-fr-list.component.css'
})
export class CityFrListComponent {
  cities: CityFr[] = []

  // DI: service
  constructor(private cityService: CityService){}

}
