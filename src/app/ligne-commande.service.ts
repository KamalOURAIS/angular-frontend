import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LigneCommande } from './ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  private baseURL = "http://localhost:8080/ligneCommande";

  constructor(private httpClient: HttpClient) { }
  
  getLigneCommandeList(): Observable<LigneCommande[]>{
    return this.httpClient.get<LigneCommande[]>(`${this.baseURL}/findAll`);
  }

  createLigneCommande(ligecommande: LigneCommande): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/insert`, ligecommande);
  }

  getLigneCommandeById(id: number): Observable<LigneCommande>{
    return this.httpClient.get<LigneCommande>(`${this.baseURL}/findById/${id}`);
  }

}
