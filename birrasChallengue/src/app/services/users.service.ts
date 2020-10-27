import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Evento } from '../models/evento.model';
import  { EventosService } from './eventos.service';

export interface User {

    nombre: string;
    usr: string;
    passwd: string;
    admin: boolean;
    eventsPen: Evento[];
    eventAsis: Evento[];
    cargo:boolean;
  
    
};

//Este servicio simula una base de datos con diferentes users, tendremos dos admin y dos users comunes





@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  private users: User[] = [
    {
      nombre: "Franco Formal",
      usr: "fran.formal",
      passwd: "admin.formal",
      admin: true,
      eventsPen: [],
      eventAsis:[],
      cargo: false

    },

    {
      nombre: "Justo Estevez",
      usr: "just.estevez",
      passwd: "admin.estevez",
      admin: true,
      eventsPen: [],
      eventAsis:[],
      cargo: false
    },
    {
      nombre: "Claudio Mendez",
      usr: "clau.mendez",
      passwd: "user.mendez",
      admin: false,
      eventsPen: [],
      eventAsis:[],
      cargo: false

    },

    {
      nombre: "Ruben pletikosa",
      usr: "rub.pletikosa",
      passwd: "user.pletikosa",
      admin: false,
      eventsPen: [],
      eventAsis:[],
      cargo: false
    }
    

  ];

  

  userLog: boolean;

  //Utilizamos esta estructura para usar el localStorage asi mantenemos los datos entre admin y user comun
  userLogin = {

     nombre: '',
     esAdm: '',
     alias:'',
     


  }
  
  constructor( ) {

      
      this.cargarStorage();
   }

   
    guardarStorage() {

         localStorage.setItem( 'data', JSON.stringify(this.userLogin) );
        
    }

    cargarStorage() {
        
        if ( localStorage.getItem( 'data')) {

             this.userLogin = JSON.parse( localStorage.getItem( 'data'));
             
        }
    }

  

   //Este metodo lo que hace es validar si el usuario esta ingresando de manera correcta sus datos de login
   validarUsr( usr: string, passwd: string):boolean {

       usr = usr.toLowerCase();
       passwd = passwd.toLowerCase();
       

       for( let i= 0; i < this.users.length; i++) {
            
            let user = this.users[i];
            let password = user.passwd.toLowerCase();
            let username = user.usr.toLowerCase();
            let nombre = user.nombre;
            let admin = user.admin;
            
            
        
            if( usr == username) {
              
                 if( passwd == password) {
                       
                       this.userLog = admin;
                       this.userLogin.nombre = nombre;
                       this.userLogin.esAdm = admin.toString();
                       this.userLogin.alias = username;
                       this.guardarStorage();
                       return true;

                 }
             }

        }

        return false;
     }
   

  //Retorna los datos del user logueado 
   getUserInfo(){
       
       return this.userLogin;
      
       
   }

   //Cada user va a tener un arreglo con los eventos disponibles, cuales podra asistir y marcar que ya ha asistido
   meetsPending( meets: Evento[] ) {
   
  
    for (let a=0; a< this.users.length; a++) {
  
        
          
          if(this.userLogin.alias == this.users[a].usr) {
            
            this.users[a].cargo = true;
            let lenghtEventos= meets.length;
            let lengthUsr = this.users[a].eventsPen.length;
            
     
              if( lengthUsr < lenghtEventos){
              for( let i=0; i < meets.length; i++){
                     
                    const event = new Evento(meets[i].titulo, meets[i].fechaEvento , meets[i].desc);
                    this.users[a].eventsPen.push(event);
              
                }
              }

              }
            
      }

   }

   //El metodo devuelve las meets que tiene disponibles el user

   returnMeetsPending() {
     
    for (let a=0; a< this.users.length; a++) {


      if(this.userLogin.alias == this.users[a].usr) {
        
        return this.users[a].eventsPen;
 
          }
    
  }



       
   }

   //El metodo lo que hace es marcar como true el flag check, que indica que asistio a la meet
   meetsAsistidas( idx: number) {

    for (let a=0; a< this.users.length; a++) {


      if(this.userLogin.alias == this.users[a].usr) {
        
        this.users[a].eventsPen[idx].check = true;

        
          }
    
  }

           
   }

   //El metodo lo que hace es marcar como true el flag asist, que indica que asistira a la meet
   meetsConfirmadas( idx: number) {

    for (let a=0; a< this.users.length; a++) {


      if(this.userLogin.alias == this.users[a].usr) {
        
        this.users[a].eventsPen[idx].asist = true;

        
          }
    
  }

           
   }

   
   //Retorna si ya se han cargado anteriomente la lista para no repetir su carga 
   returnCargaLista(): boolean {

    for (let a=0; a< this.users.length; a++) {


      if(this.userLogin.alias == this.users[a].usr) {
        
             return this.users[a].cargo;
        
          }
    
  }
       
   }


   //Este metodo lo que hace es que cuando un admin genera una nueva meet, crea en todos los users un nuevo evento, asi el mismo aparece en la lista de meets disponibles
   sumarMeet( meets: Evento[] ) {
   
  
    for (let a=0; a< this.users.length; a++) {
  
        
          
          if(this.userLogin.alias == this.users[a].usr) {
            
            this.users[a].cargo = true;
            let lenghtEventos= meets.length;
            let lengthUsr = this.users[a].eventsPen.length;

               if(lengthUsr < lenghtEventos){
                     
                     let i = meets.length-1;
                    const event = new Evento(meets[i].titulo, meets[i].fechaEvento , meets[i].desc);
                    this.users[a].eventsPen.push(event);
               }
                
              

              }
            
      }

   }

   

   
}
