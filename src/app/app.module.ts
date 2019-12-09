import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MedicoComponent } from './funcionesIntermedias2/medico/medico.component';
import { HospitalComponent } from './funcionesIntermedias2/hospital/hospital.component';
import { IncrementadorComponent } from './funcionesIntermedias2/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './funcionesAvanzadas/rutas/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
