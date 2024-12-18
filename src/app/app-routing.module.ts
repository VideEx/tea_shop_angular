import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./components/pages/product/product.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {MainComponent} from "./components/pages/main/main.component";
import {AssortmentComponent} from "./components/pages/assortment/assortment.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: AssortmentComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
