import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  clients?: Client[];
  keyword: string= '';

  constructor(private clientService: ClientService,
              private router: Router) { }  

  ngOnInit(): void {
    this.getClient();
  }

  private getClient() {
    this.clientService.getClientList().subscribe((data: any) => {
      this.clients = data;
    });
  }
  searchClients() {
    if (this.keyword.trim() === '') {
      this.getClient(); 
    } else {
      this.clientService.searchClient(this.keyword).subscribe(data => {
        this.clients = data;
      });
    }
  }

  updateClient(id: number) {
    this.router.navigate(['update-client', id]);
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe((data: any) => {
      console.log(data);
      this.getClient();
    });

}
}
