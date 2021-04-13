import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignarComponent } from './components/consignar/consignar.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { ListarCuentaComponent } from './components/listar-cuenta/listar-cuenta.component';
import { RetirarComponent } from './components/retirar/retirar.component';


//componentes
const routes: Routes = [
  {path: '', component: CrearCuentaComponent},
  {path: 'listar-cuenta', component: ListarCuentaComponent},
  {path: 'editar-cuenta', component: CrearCuentaComponent},
  {path: 'cuenta', component: CuentaComponent},
  {path: 'consignar', component: ConsignarComponent},
  {path: 'retirar', component: RetirarComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
