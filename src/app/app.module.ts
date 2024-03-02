import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarKdcComponent } from './components/navbar-kdc/navbar-kdc.component';
import { RuletaKdcComponent } from './components/ruleta-kdc/ruleta-kdc.component';
import { TableroKdcComponent } from './components/tablero-kdc/tablero-kdc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarKdcComponent,
    RuletaKdcComponent,
    TableroKdcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
