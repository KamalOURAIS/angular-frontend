import { Component } from '@angular/core';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fournisseur-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent {
  fournisseurs?: Fournisseur[];

  constructor(private fournisseurService: FournisseurService,
              private router: Router) { }  

  ngOnInit(): void {
    this.getFournisseur();
  }

  private getFournisseur() {
    this.fournisseurService.getFournisseuList().subscribe((data: Fournisseur[] | undefined) => {
      this.fournisseurs = data;
    });
  }

  fournisseurDetails(id: number) {
    this.router.navigate(['fournisseur-details', id]);
  } 

  updateFournisseur(id: number) {
    this.router.navigate(['update-fournisseur', id]);
  }

  deleteFournisseur(id: number) {
    this.fournisseurService.deleteFournisseur(id).subscribe((data: any) => {
      console.log(data);
      this.getFournisseur();
    });
  }
}
