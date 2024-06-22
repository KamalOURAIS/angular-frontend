import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-create-produits',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-produits.component.html',
  styleUrl: './create-produits.component.css'
  
})
export class CreateProduitsComponent implements OnInit {
  produits: Produits = new Produits();
  fournisseurs: Fournisseur[]=[]
  constructor(private produistService: ProduitsService,private fournisseurService:FournisseurService,
    
    private router: Router) { }

  ngOnInit(): void {
    this.loadFournisseur();

  }
  loadFournisseur(){
    this.fournisseurService.getFournisseuList().subscribe( (data:any)=> this.fournisseurs = data);
  }

  saveProduits(){
    this.produistService.createProduit(this.produits).subscribe( (data :any)=>{
      console.log(data);
      this.goToProduitsList();
    },
    error => console.log(error));
  }

  goToProduitsList(){
    this.router.navigate(['/produits']);
  }
  
  onSubmit(){
    console.log(this.produits);
    this.saveProduits();
  }
}
