import { Injectable } from '@angular/core';
import { CityFr } from '../interface/city-fr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  serviceURL: string

  // DI: httpClient
  constructor(private httpClient: HttpClient) { 
    // TODO: get from config file (dev or prod mode)
    this.serviceURL = "http://localhost:3000/cities"
  }

  // Observable: wrapper asynchrone
  getAllCities(): Observable<CityFr[]>{
    return this.httpClient.get<CityFr[]>(this.serviceURL)
  }

  getCityById(id: string): Observable<CityFr>{
    // TODO: query get with id
  }

}
