import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseURL = "http://localhost:8080/commande";

  constructor(private httpClient: HttpClient) { }
  
  getCommandeList(): Observable<Commande[]>{
    return this.httpClient.get<Commande[]>(`${this.baseURL}/findAll`);
  }

  createCommande(commande: Commande): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/insert`, commande);
  }

  getCommandeById(id: number): Observable<Commande>{
    return this.httpClient.get<Commande>(`${this.baseURL}/findById/${id}`);
  }

  updateCommande(id: number, commande: Commande): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, commande);
  }

  deleteCommande(id: number): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }

  getLigneDeCommandes(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/lignes/${id}`);
  }


}
