import { Commande } from "./commande";
import { Produits } from "./produits";

export class LigneCommande {
    id: number = 0;
    quantite: number = 0;
    commandes: Commande = new Commande();
    produits: Produits = new Produits();

}
