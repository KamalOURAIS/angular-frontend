import { Component } from '@angular/core';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-commande',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './update-commande.component.html',
  styleUrl: './update-commande.component.css'
})
export class UpdateCommandeComponent {
  id: number = 0;
  commande: Commande = new Commande();
  constructor(private commandeService: CommandeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.commandeService.getCommandeById(this.id).subscribe(data => {
      this.commande = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.commandeService.updateCommande(this.id, this.commande).subscribe( data =>{
      this.goToCommandeList();
    }
    , error => console.log(error));
  }

  goToCommandeList(){
    this.router.navigate(['/commandes']);

}

}
