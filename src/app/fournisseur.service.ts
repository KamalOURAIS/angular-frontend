import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fournisseur } from './fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private baseURL = "http://localhost:8080/fournisseur";

  constructor(private httpClient: HttpClient) { }
  
  getFournisseuList(): Observable<Fournisseur[]>{
    return this.httpClient.get<Fournisseur[]>(`${this.baseURL}/findAll`);
  }

  createFournisseur(fournisseur: Fournisseur): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/insert`, fournisseur);
  }

  getFournisseurById(id: number): Observable<Fournisseur>{
    return this.httpClient.get<Fournisseur>(`${this.baseURL}/findById/${id}`);
  }

  updateFournisseur(id: number, fournisseur: Fournisseur): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, fournisseur);
  }

  deleteFournisseur(id: number): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }


}
