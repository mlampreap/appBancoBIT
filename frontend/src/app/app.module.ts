import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { ListarCuentaComponent } from './components/listar-cuenta/listar-cuenta.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { MenuComponent } from './components/menu/menu.component';
import { ConsignarComponent } from './components/consignar/consignar.component';
import { RetirarComponent } from './components/retirar/retirar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearCuentaComponent,
    ListarCuentaComponent,
    CuentaComponent,
    MenuComponent,
    ConsignarComponent,
    RetirarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
