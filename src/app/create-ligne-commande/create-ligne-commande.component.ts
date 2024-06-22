import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { LigneCommande } from '../ligne-commande';
import { LigneCommandeService } from '../ligne-commande.service';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-create-ligne-commande',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './create-ligne-commande.component.html',
  styleUrls: ['./create-ligne-commande.component.css']
})
export class CreateLigneCommandeComponent implements OnInit {
  produits: Produits[] = [];
  commandeForm: FormGroup;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private commandeService: CommandeService,
    private produitService: ProduitsService,
    private LDCservice: LigneCommandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.commandeForm = this.fb.group({
      produit: [''],
      quantite: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produitService.getProduitList().subscribe(produits => this.produits = produits);
  }

  createLDC() {
    const produit = this.commandeForm.get('produit')?.value;
    const quantite = this.commandeForm.get('quantite')?.value;

    this.commandeService.getCommandeById(this.id).subscribe(
      (commande: Commande) => {
        const ligneCommande = new LigneCommande();
        ligneCommande.commandes = commande;
        ligneCommande.produits = produit;
        ligneCommande.quantite = quantite;

        this.LDCservice.createLigneCommande(ligneCommande).subscribe(
          response => {
            console.log('Ligne de commande created successfully', response);
            this.router.navigate(['/commandes']);
          },
          error => {
            console.error('Error creating ligne de commande', error);
          }
        );
      },
      error => {
        console.error('Error fetching commande', error);
      }
    );
  }
}