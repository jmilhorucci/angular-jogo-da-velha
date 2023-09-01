import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
