import { Component, Input } from '@angular/core';
import { City } from '../../interface/city';
import { UpperCasePipe } from '@angular/common';
import { NotDefinedPipe } from '../../pipe/not-defined.pipe';


@Component({
  selector: 'app-city-card',
  imports: [UpperCasePipe, NotDefinedPipe],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.css'
})
export class CityCardComponent {
  //  city: City = {
  //     name: 'Toulouse',
  //     // population: 500_000,
  //     // zipcode: '2a000',
  //   }

  @Input() disposition = 'v1';
  @Input() city!: City; // = { name: 'Jolie Ville'}
}
