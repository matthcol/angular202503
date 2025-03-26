import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-fr-detail',
  imports: [],
  templateUrl: './city-fr-detail.component.html',
  styleUrl: './city-fr-detail.component.css'
})
export class CityFrDetailComponent {

  // DI route (with function inject or with constructor)
  private route = inject(ActivatedRoute)
  
  id?: string

  ngOnInit(){
    // get id from route: /city-fr/detail/:id
    this.route.params.subscribe(params => this.id = params['id'])
    // get CityFR with this id
  }

}
