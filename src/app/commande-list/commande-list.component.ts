import { Component } from '@angular/core';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-commande-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './commande-list.component.html',
  styleUrl: './commande-list.component.css'
})
export class CommandeListComponent {
  commande?: Commande[];
  keyword: string= '';


  constructor(private commandeService: CommandeService,
              private router: Router) { }  

  ngOnInit(): void {
    this.getCommande();
  }

  private getCommande() {
    this.commandeService.getCommandeList().subscribe((data: any) => {
      this.commande = data;
    });
  }

  updateCommande(id: number) {
    this.router.navigate(['update-commande', id]);
  }

  deleteCommande(id: number) {
    this.commandeService.deleteCommande(id).subscribe((data: any) => {
      console.log(data);
      this.getCommande();
    });
   
  }
  voirCommande(id:number){
  this.router.navigate(['voirCommande', id]);
  }
}
