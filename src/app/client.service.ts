import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8080/client";

  constructor(private httpClient: HttpClient) { }
  
  getClientList(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL}/findAll`);
  }

  searchClient(keyword: string): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseURL}/search?keyword=${keyword}`);
  }

  createClient(client: Client): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/insert`, client);
  }

  getClientById(id: number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseURL}/findById/${id}`);
  }

  updateClient(id: number, client: Client): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, client);
  }

  deleteClient(id: number): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }

}
