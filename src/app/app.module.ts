import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesRoutingModule } from  './routes/routes-routing.module'
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  /* //componentes, pipes y directivas */
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ErrorComponent,
    DetalleComponent,
    ProductlistComponent
  ],
  /* //Modulos utilizados */
  imports: [
    BrowserModule,
    RoutesRoutingModule
  ],
  /* //Servicios */
  providers: [],
  /* //Componente inicio */
  bootstrap: [AppComponent]
})
export class AppModule { }
