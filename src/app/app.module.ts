import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { CreacionPropuestaComponent } from './creacion-propuesta/creacion-propuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    CreacionPropuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
