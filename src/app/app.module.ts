import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/pages/main/main.component';
import {OrderComponent} from './components/pages/order/order.component';
import {AssortmentComponent} from './components/pages/assortment/assortment.component';
import {ProductComponent} from './components/pages/product/product.component';
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {ModalComponent} from './components/common/modal/modal.component';
import {TeaComponent} from "./components/common/tea/tea.component";
import {ShortenTextPipe} from "./pipes/shorten-text.pipe";
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "./services/products.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderComponent,
    AssortmentComponent,
    TeaComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    TeaComponent,
    ShortenTextPipe,
    ProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
