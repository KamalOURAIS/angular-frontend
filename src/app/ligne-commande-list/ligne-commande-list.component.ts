import { Component } from '@angular/core';
import { LigneCommande } from '../ligne-commande';
import { ActivatedRoute, Router } from '@angular/router';
import { LigneCommandeService } from '../ligne-commande.service';
import { CommandeService } from '../commande.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ligne-commande-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ligne-commande-list.component.html',
  styleUrl: './ligne-commande-list.component.css'
})
export class LigneCommandeListeComponent {
  ligneCommandes: LigneCommande[] = [];
  id: number = 0;

  constructor(private CommandeService: CommandeService,
    private LDCService: LigneCommandeService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getLigneCommandes(this.id);
  }

  private getLigneCommandes(id:number){
    this.CommandeService.getLigneDeCommandes(id).subscribe((data: any) => {
      this.ligneCommandes = data;
    });
  }

  ajouterLDC(id: number){
    this.router.navigate(['ajouterLDC', id]);
  }


}