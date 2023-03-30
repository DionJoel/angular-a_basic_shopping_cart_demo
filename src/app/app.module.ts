import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    // Um die HttpClient-Anbieter von Angular global zu registrieren, fügen Sie HttpClientModule zum Import-Array AppModule @NgModule() hinzu.
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      // das setzen einer Route
      { path: 'products/:productId', component: ProductDetailsComponent },
      // Fügen Sie immer noch in app.module.ts eine Route für die Komponente CartComponent mit einem Pfad von cart hinzu
      { path: 'cart', component: CartComponent },
      // Fügen Sie in app.module.ts eine Versandroute hinzu. Geben Sie einen Versandweg und eine Komponente von ShippingComponent an.
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    // Beachten Sie, dass die neu erstellte CartComponent den Deklarationen des Moduls in app.module.ts hinzugefügt wird
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
