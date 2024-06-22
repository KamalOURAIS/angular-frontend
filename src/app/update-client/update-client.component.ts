import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent {
  
  id: number = 0;
  client: Client = new Client();
  constructor(private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.clientService.updateClient(this.id, this.client).subscribe( data =>{
      this.goToClientList();
    }
    , error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/clients']);

}
}
