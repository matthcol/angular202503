import { Injectable } from '@angular/core';
import { CityFr } from '../interface/city-fr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// rewriting rules by ng serve or ng build insure to have the wright environment
// with the same import
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  serviceURL: string

  // DI: httpClient
  constructor(private httpClient: HttpClient) { 
    // this.serviceURL = "http://localhost:3000/cities"

    // api url from environment:
    this.serviceURL = environment.apiUrl
  }

  // NB: Observable: wrapper asynchrone de rxjs
  // TODO: faire de la pagination
  getAllCities(): Observable<CityFr[]>{
    return this.httpClient.get<CityFr[]>(this.serviceURL)
  }

  getCityById(id: string): Observable<CityFr>{
    return this.httpClient.get<CityFr>(`${this.serviceURL}/${id}`)
  }

  postCity(city: CityFr): Observable<CityFr>{
    return this.httpClient.post<CityFr>(this.serviceURL, city)
  }

}
