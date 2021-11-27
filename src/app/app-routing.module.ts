import { InfantilComponent } from './produtos/infantil/infantil.component';
import { SaiaComponent } from './produtos/saia/saia.component';
import { VestidosComponent } from './produtos/vestidos/vestidos.component';
import { PijamasComponent } from './produtos/pijamas/pijamas.component';
import { ConjuntosComponent } from './produtos/conjuntos/conjuntos.component';
import { EsportivasComponent } from './produtos/esportivas/esportivas.component';
import { PoloComponent } from './produtos/polo/polo.component';
import { ShortsComponent } from './produtos/shorts/shorts.component';
import { RegatasComponent } from './produtos/regatas/regatas.component';
import { CamisasComponent } from './produtos/camisas/camisas.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'camisas', component: CamisasComponent},
  {path: 'regatas', component: RegatasComponent},
  {path: 'shorts', component: ShortsComponent},
  {path: 'polo', component: PoloComponent},
  {path: 'esportivas', component: EsportivasComponent},
  {path: 'conjuntos', component: ConjuntosComponent},
  {path: 'pijamas', component: PijamasComponent},
  {path: 'vestidos', component: VestidosComponent},
  {path: 'saias', component: SaiaComponent},
  {path: 'infantil', component: InfantilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
