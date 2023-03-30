import { Component, OnInit } from '@angular/core';
// damit die Route aus product-list.component.html funktioniert
import { ActivatedRoute } from '@angular/router';

// die Route implementieren
import { Product, products } from '../products';
// Dieser Abschnitt führt Sie durch die Verwendung des CartService zum Hinzufügen eines Produkts zum Einkaufswagen.
//Importieren Sie in product-details.component.ts den Warenkorbdienst.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // die Produkt Eigenschaft definieren
  product: Product | undefined;

  constructor(
    // die ActivatedRoute im konstruktor injizieren
    private route: ActivatedRoute,
    // Fügen Sie den Warenkorbdienst ein, indem Sie ihn zum constructor() hinzufügen.
    private cartService: CartService
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  // Definieren Sie die Methode addToCart(), die das aktuelle Produkt zum Einkaufswagen hinzufügt
  /*
  Die Methode addToCart() macht Folgendes:
  - Nimmt das aktuelle Produkt als Argument
  - Verwendet die Methode CartService addToCart(), um das Produkt zum Einkaufswagen hinzuzufügen
  - Zeigt eine Nachricht an, dass Sie dem Warenkorb ein Produkt hinzugefügt haben
  */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
