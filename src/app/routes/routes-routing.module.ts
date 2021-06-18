import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from '../detalle/detalle.component';
import { ErrorComponent } from '../error/error.component';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'products', component: ProductComponent},
 {path: 'product/:id', component: DetalleComponent},
 {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
