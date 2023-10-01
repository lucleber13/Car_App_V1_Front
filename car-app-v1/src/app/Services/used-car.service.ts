import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsedCar} from "../Models/used-car";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsedCarService {
  private apiUrl = '/api/v1/cars/used';

  constructor(private http: HttpClient) { }

  createUsedCar(usedCar: UsedCar): Observable<UsedCar> {
    return this.http.post<UsedCar>(this.apiUrl, usedCar);
  }

  // Add the following method to the UsedCarService class:
}
