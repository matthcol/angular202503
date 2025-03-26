import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CityFr } from '../../../interface/city-fr';
import { CityService } from '../../../service/city.service';
import { Router } from '@angular/router';

const cleanEmptyString = 
    (text: string|undefined|null) => (text == '' || text == undefined || text == null)
          ? undefined : text

const convertNullableNumber =
    (text: string|undefined|null) => (text == '' || text == undefined || text == null) 
          ? undefined : Number.parseInt(text) 

@Component({
  selector: 'app-city-fr-create',
  imports: [ReactiveFormsModule],
  templateUrl: './city-fr-create.component.html',
  styleUrl: './city-fr-create.component.css'
})
export class CityFrCreateComponent {

  // DI: cityService + router
  cityService = inject(CityService)
  router = inject(Router)

  // property: reactive form (formulaire programmé)
  cityForm = new FormGroup({
    nom_standard: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    }),
    code_postal: new FormControl('', {
      validators: [
        Validators.pattern('[0-9]{5}')
      ]
    }),
    population: new FormControl('', {
      validators: [
        Validators.min(1)
      ]
    })
  })

  addCity(){
    console.log('ajout nouvelle ville (début)')
    // NB: validation ici ou dans le template (ngSubmit ou button submit disabled)
    // if (!this.cityForm.valid) {
    //   console.log('formulaire non valide')
    //   return
    // }
    const city: CityFr = {
      nom_standard: this.cityForm.value.nom_standard??'always here if valid',
      code_postal: cleanEmptyString(this.cityForm.value.code_postal),
      population: convertNullableNumber(this.cityForm.value.population)
    }
    console.log('ville à ajouter:', city)
    this.cityService.postCity(city)
      .subscribe((cityAdded: CityFr) => {
        console.log('ville ajoutée:', cityAdded)
        this.router.navigate(["/city-fr/detail", cityAdded.id])
      })
  }

}
