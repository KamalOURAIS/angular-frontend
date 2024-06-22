import { Component } from '@angular/core';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits-list.component.html',
  styleUrl: './produits-list.component.css'
})
export class ProduitsListComponent {
  produits?: Produits[];

  constructor(private produitsService: ProduitsService,
              private router: Router) { }  

  ngOnInit(): void {
    this.getProduits();
  }

  private getProduits() {
    this.produitsService.getProduitList().subscribe((data: Produits[] | undefined) => {
      this.produits = data;
    });
  }

  updateProduits(id: number) {
    this.router.navigate(['update-produits', id]);
  }

  deleteProduits(id: number) {
    this.produitsService.deleteProduit(id).subscribe((data: any) => {
      console.log(data);
      this.getProduits();
    });
  }

}
