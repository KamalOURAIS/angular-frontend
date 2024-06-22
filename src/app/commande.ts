import { Client } from "./client";
import { LigneCommande } from "./ligne-commande";

export class Commande {
    id: number =0 
    date?: Date;
    ligneCommande: LigneCommande[]= [];
    client : Client = new Client();
}
