import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Helloworld } from './primercomponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    Helloworld,
    HolaMundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
