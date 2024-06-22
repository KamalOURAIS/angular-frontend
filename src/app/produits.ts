import { Fournisseur } from "./fournisseur";

export class Produits {
    id: number =0 
    nom?: string ;
    quantiteStock?: number;
    prix?: number;
    fournisseur: Fournisseur=new Fournisseur();
}