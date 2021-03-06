import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Wibject} from '../../models/wibject';

@Injectable({
  providedIn: 'root'
})
export class WittyComparisonService {
  apiUrl = 'https://populationdensitycomparator.azurewebsites.net/api/PopulationDensityHttpTrigger?density=';

  constructor(private http: HttpClient) { }

  getWittyComparison(density: number) {
    return this.http.get<Wibject>(this.apiUrl + density);
  }
}
