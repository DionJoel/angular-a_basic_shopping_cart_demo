import { Component } from '@angular/core';
// Dieser Dienst bietet praktische Methoden zum Generieren von Steuerelementen.
import { FormBuilder } from '@angular/forms';
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

  /**
   * Um den Namen und die Adresse des Benutzers zu erfassen, verwenden Sie die Methode FormBuilder group(), um die checkoutForm-Eigenschaft auf ein Formularmodell festzulegen, das Namens- und Adressfelder enthält.
   * src/app/cart/cart.component.ts
   */
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    // Fügen Sie den CartService ein, damit die CartComponent ihn verwenden kann, indem Sie ihn dem Konstruktor () hinzufügen.
    private cartService: CartService,
    // Dieser Dienst ist Teil des ReactiveFormsModule-Moduls, das Sie bereits importiert haben.
    private formBuilder: FormBuilder
  ) {}

  /**
   * Definieren Sie eine onSubmit()-Methode, um das Formular zu verarbeiten.
   * Bei dieser Methode können Benutzer ihren Namen und ihre Adresse übermitteln.
   * Außerdem verwendet diese Methode die Methode clearCart() des CartService, um das Formular zurückzusetzen und den Warenkorb zu leeren.
   */
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
