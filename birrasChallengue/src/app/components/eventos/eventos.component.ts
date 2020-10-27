import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventosService } from '../../services/eventos.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  activarCard:boolean = false;
  completar:boolean = true;
  eventoCreado: boolean = false;

  constructor( private eventos: EventosService ) { 

  }

   ngOnInit(): void {
  }

  verDatos( dato: any){

    let dia: string = (dato['model'].focusDate.day).toString();
    
    console.log( dia);
 }


 activar() {
   this.activarCard = true;
   this.eventoCreado = false;
 }

 crearEvento( titulo: string, fecha:any, desc: string) {
   if(titulo !='') {
   
        if (desc != ''){
       console.log('Creo el evento');
       let dia: string = (fecha['model'].focusDate.day).toString();
       let mes: string = (fecha['model'].focusDate.month).toString();
       let ano: string = (fecha['model'].focusDate.year).toString();
       let fechaevent : string = dia+'-'+mes+'-'+ano;
       this.eventos.crearEvento( titulo, fechaevent, desc);
       this.activarCard = false;
       this.eventoCreado = true;
        }else {
          this.completar = false;
        }
   }else {
         
         this.completar = false;
   }
 }
}
