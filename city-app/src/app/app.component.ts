import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityCardSimpleComponent } from "./component/city-card-simple/city-card-simple.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CityCardSimpleComponent],

  // HTML part: inline avec template ou autre fichier avec templateUrl
  templateUrl: './app.component.html',

  // CSS part: inline avec style ou autre fichier avec styleUrl
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'city-app';
}
