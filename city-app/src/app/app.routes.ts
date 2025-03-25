import { Routes } from '@angular/router';
import { CityListComponent } from './component/city-list/city-list.component';
import { CityCardSimpleComponent } from './component/city-card-simple/city-card-simple.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'cities', component: CityListComponent},
    {path: 'city-simple', component: CityCardSimpleComponent}
];
