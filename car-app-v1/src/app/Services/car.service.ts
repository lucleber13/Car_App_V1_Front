import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarDTO} from "../Models/car-dto";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = '/api/v1/cars/all';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<CarDTO[]> {
    return this.http.get<CarDTO[]>(this.apiUrl);
  }
}
