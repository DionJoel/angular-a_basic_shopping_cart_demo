import { Component, OnInit } from '@angular/core';
/**
 * Dieser Abschnitt führt Sie durch das Ändern der ShippingComponent zum Abrufen von Versanddaten über HTTP aus der Datei shipping.json.
  - Importieren Sie in shipping.component.ts CartService.
 */
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  // Fügen Sie den Warenkorbdienst in den ShippingComponent-Konstruktor () ein.
  constructor(private cartService: CartService) {}

  /**
   * Definieren Sie eine Eigenschaft shippingCosts, die die Eigenschaft shippingCosts mithilfe der Methode getShippingPrices() von CartService festlegt. 
   * Initialisieren Sie die Eigenschaft shippingCosts innerhalb der Methode ngOnInit().
   */
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
