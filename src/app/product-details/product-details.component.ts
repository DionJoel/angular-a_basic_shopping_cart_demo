import { Component, OnInit } from '@angular/core';
// damit die Route aus product-list.component.html funktioniert
import { ActivatedRoute } from '@angular/router';
// die Route implementieren
import { Product, products } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // die Produkt Eigenschaft definieren
  product: Product | undefined;
  // die ActivatedRoute im konstruktor injizieren
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}


