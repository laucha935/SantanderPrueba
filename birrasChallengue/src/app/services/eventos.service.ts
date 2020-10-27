import { Injectable } from '@angular/core';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

    eventos: Evento[] = [];

  constructor () { 

      const Evento1 = new Evento('TerrazaFest', '10-20-2020', 'Hoy se bebe hoy se baila!');
      const Evento2 = new Evento ('BirrasCopadas','15-10-2020','Vamos a tomar unas birras copadas');

      this.eventos.push(Evento1);
      this.eventos.push(Evento2);

      this.cargarStorage();


   }

   
   crearEvento( titulo: string, fecha: string, desc: string) {

     const nuevoEvento = new Evento( titulo, fecha, desc);
     this.eventos.push( nuevoEvento);
     this.guardarStorage();
     

   }

   guardarStorage() {

       localStorage.setItem('eventos', JSON.stringify(this.eventos) );
   }

   cargarStorage() {

      if( localStorage.getItem('eventos')) {
          
             this.eventos = JSON.parse( localStorage.getItem('eventos'));
      }
   }


   obtenerEventos(): Evento[] {

       return this.eventos;
   }

   cargarAsistente(index: number, nombre: string) {

        this.eventos[index].asistentes.push(nombre);   
     
   }
}
