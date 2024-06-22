import { Component , OnInit} from '@angular/core';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-fournisseur',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './update-fournisseur.component.html',
  styleUrl: './update-fournisseur.component.css'
})
export class UpdateFournisseurComponent implements OnInit{

  id: number = 0;
  fournisseur: Fournisseur = new Fournisseur();
  constructor(private fournisseurService: FournisseurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fournisseurService.getFournisseurById(this.id).subscribe(data => {
      this.fournisseur = data;
    }, error => console.log(error));
  } 

  onSubmit(){
    this.fournisseurService.updateFournisseur(this.id, this.fournisseur).subscribe( data =>{
      this.goToFournisseurList();
    }
    , error => console.log(error));
  }

  goToFournisseurList(){
    this.router.navigate(['/fournisseurs']);
  }
}