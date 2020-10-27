import { Component, OnInit } from '@angular/core';
import  { EventosService } from '../../services/eventos.service';
import { UsersService } from '../../services/users.service';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

   meetsPending:Evento[];
   cargausr: boolean;
   userLog: any;
   asist: boolean = false;
  constructor( public listaEvento : EventosService, private userServ: UsersService) {
          
        
    
    this.cargausr = this.userServ.returnCargaLista();


         
          let meets: Evento[];
          
          meets = listaEvento.obtenerEventos();
        if( this.cargausr == false) {
          userServ.meetsPending(meets);
          this.meetsPending = userServ.returnMeetsPending();
      
        }else {
            
            if( this.cargausr){
               userServ.sumarMeet(meets);
               this.meetsPending = userServ.returnMeetsPending();
                 
            }

        }
          
          
      
         
   }


   modificarEstado(index:number) {
      
        this.userServ.meetsAsistidas( index );

   }

   sumarAsist(index: number) {
       
         this.userLog = this.userServ.getUserInfo();
         this.asist = true;
         this.userServ.meetsConfirmadas(index);
         this.listaEvento.cargarAsistente(index, this.userLog.nombre);
        
        
       
        
        

   }
  ngOnInit(): void {
  }

}
