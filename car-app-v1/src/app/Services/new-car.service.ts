import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewCar} from "../Models/new-car";

@Injectable({
  providedIn: 'root'
})
export class NewCarService {
  private apiUrl = '/api/v1/cars/new';

  constructor(private http: HttpClient) { }

  createNewCar(newCar: NewCar): Observable<NewCar> {
    return this.http.post<NewCar>(this.apiUrl, newCar);
  }

  // Add the following method to the NewCarService class:

}
