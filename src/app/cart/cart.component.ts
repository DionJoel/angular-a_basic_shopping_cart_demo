import { Component } from '@angular/core';
// Importieren Sie in cart.component.ts den CartService aus der Datei cart.service.ts.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // Definieren Sie die Eigenschaft items, um die Produkte im Warenkorb zu speichern.
  /*
  - Dieser Code legt die Elemente mit der Methode CartService getItems() fest.
  - Sie haben diese Methode beim Erstellen von cart.service.ts definiert.
  */
  items = this.cartService.getItems();

  constructor(
    // Fügen Sie den CartService ein, damit die CartComponent ihn verwenden kann, indem Sie ihn dem Konstruktor () hinzufügen.
    private cartService: CartService
  ) {}
}
