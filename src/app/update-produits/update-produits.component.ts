import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Produits } from '../produits';
import { FournisseurService } from '../fournisseur.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-update-produits',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './update-produits.component.html',
  styleUrl: './update-produits.component.css'
})
export class UpdateProduitsComponent implements OnInit {
  id: number = 0;
  produits: Produits = new Produits;
  constructor(private produitsService: ProduitsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produitsService.getProduitById(this.id).subscribe(data => {
      this.produits = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.produitsService.updateProduit(this.id, this.produits).subscribe( data =>{
      this.goToProduitsList();
    }
    , error => console.log(error));
  }

  goToProduitsList(){
    this.router.navigate(['/fournisseurs']);
  }

}
