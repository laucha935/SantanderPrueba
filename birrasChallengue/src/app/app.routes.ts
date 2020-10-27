import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { CalculoBirrasComponent } from './components/calculo-birras/calculo-birras.component';
import { PronosticoTiempoComponent } from './components/pronostico-tiempo/pronostico-tiempo.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';


const APP_ROUTES: Routes = [

       { path: 'main', component: MainComponent},
       { path: 'login', component: LoginComponent},
       { path: 'calculo', component: CalculoBirrasComponent},
       { path: 'pronostico', component: PronosticoTiempoComponent },
       { path: 'evento', component: EventosComponent },
       { path: 'listaEvento', component: ListaEventosComponent },
       
       { path:'**', pathMatch: 'full', redirectTo: 'login'}

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
