import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

//Se importan las rutas para navegar
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalculoBirrasComponent } from './components/calculo-birras/calculo-birras.component';

//Importo para consumir el servicio
import { HttpClientModule } from '@angular/common/http';
import { weatherService } from './services/serviceweather.service';
import { PronosticoTiempoComponent } from './components/pronostico-tiempo/pronostico-tiempo.component';
import { UsersService } from './services/users.service';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    CalculoBirrasComponent,
    PronosticoTiempoComponent,
    EventosComponent,
    ListaEventosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    weatherService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
