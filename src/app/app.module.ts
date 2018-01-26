import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { SliderComponent } from './slider/slider.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LansFooterComponent } from './lans-footer/lans-footer.component';
import { RazonesComponent } from './razones/razones.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CalidadComponent } from './calidad/calidad.component';
import { SociosComponent } from './socios/socios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SistemaComponent } from './sistema/sistema.component';
import { SistemaSmallComponent } from './sistema-small/sistema-small.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    SliderComponent,
    NosotrosComponent,
    LansFooterComponent,
    RazonesComponent,
    ServiciosComponent,
    CalidadComponent,
    SociosComponent,
    ContactoComponent,
    SistemaComponent,
    SistemaSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXrbsJBEde5VN5hMepzwvp_SLE288VhPo'
    }),
    NgxCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
