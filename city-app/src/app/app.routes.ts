import { Routes } from '@angular/router';
import { CityListComponent } from './component/city-list/city-list.component';
import { CityCardSimpleComponent } from './component/city-card-simple/city-card-simple.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './component/pages/page-not-found/page-not-found.component';
import { randomGuard } from './guard/random.guard';
import { PageErrorComponent } from './component/pages/page-error/page-error.component';
import { CityFrListComponent } from './component/city-fr/city-fr-list/city-fr-list.component';
import { CityFrDetailComponent } from './component/city-fr/city-fr-detail/city-fr-detail.component';
import { CityFrCreateComponent } from './component/city-fr/city-fr-create/city-fr-create.component';

export const routes: Routes = [
    {path: '', redirectTo: "/cities", pathMatch: "full"},
    {path: 'cities', title: "Liste Villes", component: CityListComponent},
    {path: 'city-simple', title: "Ville Simple", 
        canActivate: [randomGuard], component: CityCardSimpleComponent},
    {path: 'city-fr', children:[
        {path: '', component: CityFrListComponent},
        {path: 'detail/:id', component: CityFrDetailComponent},
        {path: 'create', component: CityFrCreateComponent},
    ]},
    // NB1: possibilité d'avoir du chargement dynamique si beaucoup de routes
    // NB2: charger des routes d'un module ou 1 fichier secondaire
    {path: "error", component: PageErrorComponent},
    {path: '**', component: PageNotFoundComponent}
];
