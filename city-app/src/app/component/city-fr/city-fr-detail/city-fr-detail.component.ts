import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityFr } from '../../../interface/city-fr';
import { CityService } from '../../../service/city.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-city-fr-detail',
  imports: [],
  templateUrl: './city-fr-detail.component.html',
  styleUrl: './city-fr-detail.component.css'
})
export class CityFrDetailComponent {

  // DI route (with function inject or with constructor)
  private route = inject(ActivatedRoute)
  // DI cityService
  private cityService = inject(CityService)

  id?: string
  city?: CityFr

  // bonus map
  private map!:L.Map
  markers: L.Marker[] = [
    L.marker(
      	[43.596, 1.432] // Toulouse
    )
  ]

  ngOnInit(){
    // get id from route: /city-fr/detail/:id
    this.route.params.subscribe(params => this.id = params['id'])
    // get CityFR with this id
    if (this.id) this.cityService.getCityById(this.id)
        .subscribe((city: CityFr) => {
            this.city = city
            if (city.latitude_mairie && city.longitude_mairie) {
              this.markers.splice(0,1, L.marker(
                [city.latitude_mairie, city.longitude_mairie]
              ))
              console.log('nouvelles coordonnées:', this.markers)
              this.centerMap()
            }
        })
  }

  // Bonus map avec leaflet

  ngAfterViewInit() {
    this.initMap();
    this.centerMap();
  }

  private initMap() {
    console.log('init map')
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map', 
        // {
        //   center: this.markers[0].getLatLng(),
        //   zoom: 7
        // }
    );
    L.tileLayer(baseMapURl, {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  private centerMap() {
    console.log('(re)center map')
    // Create a boundary based on the markers
    // => rayon de 5 km autour du centre de la ville
    const bounds = this.markers[0].getLatLng().toBounds(5000)
    console.log('Map bounds:', bounds)
    
    // place a marker on the map (or a circle or a polygon)
    this.markers[0].addTo(this.map)
      .bindPopup(`<p><b>${this.city?.nom_standard}</b></p><p>population=${this.city?.population}</p>`)
      //.openPopup() // open popup by default

    // Fit the map into the boundary: (or use .setView)
    this.map.fitBounds(bounds)
  }

}
