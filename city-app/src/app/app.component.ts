import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityCardSimpleComponent } from "./component/city-card-simple/city-card-simple.component";
import { CityCardComponent } from "./component/city-card/city-card.component";
import { CityListComponent } from "./component/city-list/city-list.component";
import { MenuComponent } from "./component/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    // CityCardSimpleComponent, CityListComponent, 
    MenuComponent
  ],

  // HTML part: inline avec template ou autre fichier avec templateUrl
  templateUrl: './app.component.html',

  // CSS part: inline avec style ou autre fichier avec styleUrl
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'city-app';
}
