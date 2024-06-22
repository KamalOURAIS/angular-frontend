import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produits } from './produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private baseURL = "http://localhost:8080/produit";

  constructor(private httpClient: HttpClient) { }
  
  getProduitList(): Observable<Produits[]>{
    return this.httpClient.get<Produits[]>(`${this.baseURL}/findAll`);
  }

  createProduit(produits: Produits): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/insert`, produits);
  }

  getProduitById(id: number): Observable<Produits>{
    return this.httpClient.get<Produits>(`${this.baseURL}/findById/${id}`);
  }

  updateProduit(id: number, produits: Produits): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, produits);
  }

  deleteProduit(id: number): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
