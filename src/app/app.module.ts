import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamisasComponent } from './produtos/camisas/camisas.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { RegatasComponent } from './produtos/regatas/regatas.component';
import { ShortsComponent } from './produtos/shorts/shorts.component';
import { PoloComponent } from './produtos/polo/polo.component';
import { EsportivasComponent } from './produtos/esportivas/esportivas.component';
import { ConjuntosComponent } from './produtos/conjuntos/conjuntos.component';
import { PijamasComponent } from './produtos/pijamas/pijamas.component';
import { VestidosComponent } from './produtos/vestidos/vestidos.component';
import { SaiaComponent } from './produtos/saia/saia.component';
import { InfantilComponent } from './produtos/infantil/infantil.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CamisasComponent,
    BarraMenuComponent,
    RegatasComponent,
    ShortsComponent,
    PoloComponent,
    EsportivasComponent,
    ConjuntosComponent,
    PijamasComponent,
    VestidosComponent,
    SaiaComponent,
    InfantilComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
