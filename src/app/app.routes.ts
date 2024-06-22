import { Routes } from '@angular/router';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { CreateFournisseurComponent } from './create-fournisseur/create-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';

import { ProduitsListComponent } from './produits-list/produits-list.component'; 
import { UpdateProduitsComponent } from './update-produits/update-produits.component';
import { CreateProduitsComponent } from './create-produits/create-produits.component';

import { ClientListComponent } from './client-list/client-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { CreateClientComponent } from './create-client/create-client.component';

import { CommandeListComponent } from './commande-list/commande-list.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { LigneCommandeListeComponent } from './ligne-commande-list/ligne-commande-list.component';
import { CreateLigneCommandeComponent } from './create-ligne-commande/create-ligne-commande.component';

export const routes: Routes = [

    {path: 'fournisseurs', component: FournisseurListComponent},
    {path: 'create-fournisseur', component: CreateFournisseurComponent},
    {path: '', redirectTo: 'fournisseur', pathMatch: 'full'},
    {path: 'update-fournisseur/:id', component: UpdateFournisseurComponent},


    {path: 'produits', component: ProduitsListComponent},
    {path: 'update-produits/:id', component: UpdateProduitsComponent},
    {path: 'create-produits', component: CreateProduitsComponent},

    {path: 'clients', component: ClientListComponent},
    {path: 'update-client/:id', component: UpdateClientComponent},
    {path: 'create-client', component: CreateClientComponent},

    {path: 'commandes', component: CommandeListComponent},
    {path: 'update-commande/:id', component: UpdateCommandeComponent},
    {path: 'create-commande', component: CreateCommandeComponent},

    {path: 'voirCommande/:id', component: LigneCommandeListeComponent},
    {path: 'ajouterLDC/:id', component: CreateLigneCommandeComponent},

]
