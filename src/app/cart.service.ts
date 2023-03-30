/* Der nächste Schritt besteht darin, den HttpClient-Dienst in Ihren Dienst einzufügen, damit Ihre Anwendung Daten abrufen und mit externen APIs und Ressourcen interagieren kann.
-Importieren Sie in cart.service.ts HttpClient aus dem Paket @angular/common/http.
*/
import { HttpClient } from '@angular/common/http';
// importieren des Interfaces product
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // define an items property to store the array of the current products in the cart
  items: Product[] = [];

  // Definieren Sie Methoden zum Hinzufügen von Artikeln zum Einkaufswagen, zum Zurückgeben von Einkaufswagenartikeln und zum Löschen der Einkaufswagenartikel

  /*
    - Die Methode addToCart() hängt ein Produkt an ein Array von Artikeln an
    - Die Methode getItems() sammelt die Artikel, die Benutzer dem Warenkorb hinzufügen, und gibt jeden Artikel mit der zugehörigen Menge zurück
    - Die Methode clearCart() gibt ein leeres Array von Artikeln zurück, wodurch der Einkaufswagen geleert wird
  */
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* Um Versanddaten aus shipping.json abzurufen, können Sie die Methode HttpClient get() verwenden.
Definieren Sie in cart.service.ts unterhalb der Methode clearCart() eine neue Methode getShippingPrices(), die die Methode HttpClient get() verwendet.
*/
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }

  constructor(
    // Fügen Sie HttpClient in den CartService-Konstruktor () ein.
    private http: HttpClient
  ) {}
}
